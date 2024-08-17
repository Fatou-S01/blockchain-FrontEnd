import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent {
  role: string | null = null;

  constructor(private authService: AuthService,private router: Router) {}

  ngOnInit(): void {
    this.role = this.authService.getUserRole();
    console.log(this.role);
  }

  logout(): void {
    this.authService.logout(); // Appelle la méthode logout du service d'authentification
    this.router.navigate(['/connexion']); // Redirige l'utilisateur vers la page de connexion
  }
}
