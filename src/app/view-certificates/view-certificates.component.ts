import { Component, OnInit } from '@angular/core';
import { CertificateService } from '../certificate.service';

@Component({
  selector: 'app-view-certificates',
  templateUrl: './view-certificates.component.html',
  styleUrls: [
    './view-certificates.component.css',
    '../accueil/accueil.component.css',
  ],
})
export class ViewCertificatesComponent implements OnInit {
  certificateDetails: any[] = [];

  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    this.loadCertificates();
  }

  loadCertificates(): void {
    this.certificateService.getAllCertificates().subscribe(
      (data) => {
        this.certificateDetails = data;
        console.log('Certificates loaded successfully', data);
      },
      (error) => {
        console.error('Error loading certificates', error);
      }
    );
  }
  cancelCertificate(item: any): void {
    if (confirm(`Are you sure you want to cancel the certificate for ${item.prenom} ${item.nom}?`)) {
      this.certificateService.cancelCertificate(item.id).subscribe(
        () => {
          const index = this.certificateDetails.indexOf(item);
          if (index > -1) {
            this.certificateDetails.splice(index, 1); // Supprime l'élément du tableau
            console.log(`Certificate for ${item.prenom} ${item.nom} has been canceled.`);
          }
        },
        (error) => {
          console.error('Error canceling certificate', error);
        }
      );
    }
  }
  
}
