import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-certificate-view',
  templateUrl: './certificate-view.component.html',
  styleUrls: [
    './certificate-view.component.css',
    '../accueil/accueil.component.css',
  ],
})
export class CertificateViewComponent {
  certificate: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const certificateId = this.route.snapshot.paramMap.get('id');

    const allCertificates = [
      {
        id: '1',
        prenom: 'Oumou Khairy',
        nom: 'Sougou',
        annee_naissance: '07 Mars 2001',
        annee_graduation: '2024',
        degree_classification:
          'Ingénieur en génie Informatique et Télécommunications',
        date_of_issue: '27/07/2024',
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

    this.certificate = allCertificates.find(
      (cert) => cert.id === certificateId
    );
  }
}
