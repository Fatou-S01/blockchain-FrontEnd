import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CertificateService } from '../certificate.service';

@Component({
  selector: 'app-create-certificate',
  templateUrl: './create-certificate.component.html',
  styleUrls: [
    './create-certificate.component.css',
    '../accueil/accueil.component.css',
  ],
})
export class CreateCertificateComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private certificateService: CertificateService) {
    this.registerForm = this.fb.group({
      prenom: ['', Validators.required],
      middleName: ['', Validators.required],
      nom: ['', Validators.required],
      cin: ['', Validators.required],
      birthDate: ['', Validators.required],
      deliveranceDate: ['', Validators.required],
      expirationDate: [''], // Optional, so no Validators.required
      honor: ['', Validators.required],
      diplomaTitle: ['', Validators.required],
      diplomaLink: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.certificateService.createCertificate(this.registerForm.value)
        .subscribe(
          (response) => {
            console.log('Certificate created successfully', response);
          },
          (error) => {
            console.error('Error creating certificate', error);
          }
        );
    } else {
      console.log('Form not valid');
    }
  }
}
