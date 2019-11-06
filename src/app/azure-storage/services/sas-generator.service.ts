import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlobStorageRequest } from '../types/azure-storage';

@Injectable({
  providedIn: 'root'
})
export class SasGeneratorService {
  constructor(private http: HttpClient) {}

  getSasToken(): Observable<BlobStorageRequest> {
    if (environment.production) {
      return this.http.get<BlobStorageRequest>(
        `${environment.sasGeneratorUrl}/api/GenerateSas`
      );
    }
    return of({
      storageUri: 'stottleblobstorage',
      storageAccessToken:
        'sv=2019-02-02&ss=b&srt=sco&sp=rwdlac&se=2019-11-14T19:20:59Z&st=2019-11-01T11:20:59Z&spr=https&sig=dG1zvo67VNDrqeWlrcrlz78W2ONVbYn2FlGJeFDifGg%3D'
    });
  }
}
