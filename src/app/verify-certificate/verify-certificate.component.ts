import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verify-certificate',
  standalone: true,
  imports: [],
  templateUrl: './verify-certificate.component.html',
  styleUrls: [
    './verify-certificate.component.css',
    '../accueil/accueil.component.css',
  ],
})

export class VerifyCertificateComponent {
  verificationForm: FormGroup;
  verificationResult: string | null = null;

  constructor(private fb: FormBuilder) {
    this.verificationForm = this.fb.group({
      certHash: [''],
    });
  }

  verifyCertificate(): void {
    const certHash = this.verificationForm.get('certHash')?.value;

    // Simuler une vérification de certificat
    if (certHash === 'exempleHash') {
      this.verificationResult = 'Certificat valide';
    } else {
      this.verificationResult = 'Certificat invalide';
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileData = reader.result as string;
        // Simuler une vérification basée sur le fichier
        this.verificationResult = 'Vérification du fichier non implémentée';
      };
      reader.readAsDataURL(file);
    }
  }
}
