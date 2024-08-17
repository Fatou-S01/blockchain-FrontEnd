import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  private apiUrl = 'http://localhost:5000/api/certificates'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  createCertificate(certificateData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/create`, certificateData, { headers });
  }

  getAllCertificates(): Observable<any> {
    return this.http.get(`${this.apiUrl}/list`);
  }

  cancelCertificate(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/cancel/${id}`);
  }
}
