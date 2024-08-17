import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../login/login.component.css'],
})
export class SignUpComponent {
  first_name: string = '';
  last_name: string = '';
  username: string = '';
  role: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const signUpData = {
      first_name: this.first_name,
      last_name: this.last_name,
      username: this.username,
      role: this.role,
      email: this.email,
      password: this.password,
    };

    this.authService.register(signUpData).subscribe(
      (response) => {
        console.log('Inscription réussie', response);
        // Rediriger vers la page de connexion après une inscription réussie
        this.router.navigate(['/connexion']);
      },
      (error) => {
        console.error("Erreur lors de l'inscription", error);
      }
    );
  }
}
