import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const loginData = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(loginData).subscribe(
      (response) => {
        console.log('Connexion réussie', response);
        localStorage.setItem('authToken', response.token); // Stocker le token dans localStorage
        // Rediriger vers la page principale après une connexion réussie
        this.router.navigate(['/accueil']);
      },
      (error) => {
        console.error('Erreur lors de la connexion', error);
      }
    );
  }
}
