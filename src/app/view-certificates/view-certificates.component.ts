import { Component } from '@angular/core';

@Component({
  selector: 'app-view-certificates',
  templateUrl: './view-certificates.component.html',
  styleUrls: [
    './view-certificates.component.css',
    '../accueil/accueil.component.css',
  ],
})
export class ViewCertificatesComponent {
  certificateDetails = [
    {
      prenom: 'John',
      nom: 'Doe',
      annee_naissance: '1998',
      annee_graduation: '2020',
      degree_classification: 'First Class Honors',
      date_of_issue: '01/07/2020',
    },
    {
      prenom: 'Jane',
      nom: 'Smith',
      annee_naissance: '1997',
      annee_graduation: '2019',
      degree_classification: 'Upper Second Class Honors',
      date_of_issue: '01/07/2019',
    },
    {
      prenom: 'Larry',
      nom: 'Bird',
      annee_naissance: '1996',
      annee_graduation: '2018',
      degree_classification: 'Lower Second Class Honors',
      date_of_issue: '01/07/2018',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  cancelCertificate(item: any): void {
    const index = this.certificateDetails.indexOf(item);
    if (index > -1) {
      this.certificateDetails.splice(index, 1); // Supprime l'élément du tableau
      console.log(
        `Certificate for ${item.prenom} ${item.nom} has been canceled.`
      );
    }
  }
}
