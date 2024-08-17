import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  private apiUrl = 'http://localhost:5000/api/certificates';

  constructor(private http: HttpClient) {}

  createCertificate(certificateData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, certificateData);
  }
}
