import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-my-certificate',
  templateUrl: './view-my-certificate.component.html',
  styleUrls: [
    './view-my-certificate.component.css',
    '../accueil/accueil.component.css',
  ],
})
export class ViewMyCertificateComponent {
  certificateDetails = [
    {
      id:'1',
      prenom: 'John',
      nom: 'Doe',
      annee_naissance: '1998',
      annee_graduation: '2020',
      degree_classification: 'First Class Honors',
      date_of_issue: '01/07/2020',
      hash: 'fr844fd5g6ggg7',
    },
    {
      id: '2',
      prenom: 'Jane',
      nom: 'Smith',
      annee_naissance: '1997',
      annee_graduation: '2019',
      degree_classification: 'Upper Second Class Honors',
      date_of_issue: '01/07/2019',
      hash: 'fr844fd5g6ggg7',
    },
    {
      id: '3',
      prenom: 'Larry',
      nom: 'Bird',
      annee_naissance: '1996',
      annee_graduation: '2018',
      degree_classification: 'Lower Second Class Honors',
      date_of_issue: '01/07/2018',
      hash: 'fr844fd5g6ggg7',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewCertificate(id: string): void {
    this.router.navigate(['/view-certificate', id]); // Redirige vers la page de certificat
  }

  shareCertificate(item: any): void {
    // Logique pour partager le certificat
    console.log('Partager le certificat:', item);
  }
}
