import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode'; // Import correct

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth'; // Remplacez par l'URL de votre backend
  private token: string | null = null;
  private userRole: string | null = null;

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  login(loginData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, loginData).pipe(
      tap((response: any) => {
        this.token = response.token;
        localStorage.setItem('token', this.token!);
        this.decodeToken();
      })
    );
  }
  decodeToken(): void {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      this.token = storedToken;
      const decoded: any = jwtDecode(this.token);
      console.log('Decoded token:', decoded); // Ajoutez cette ligne pour voir le contenu du token
      this.userRole = decoded.role;
    }
  }

  getUserRole(): string | null {
    if (!this.userRole) {
      this.decodeToken();
    }
    return this.userRole;
  }

  getProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(`${this.apiUrl}/profile`, { headers });
  }

  logout(): void {
    this.token = null;
    this.userRole = null;
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
