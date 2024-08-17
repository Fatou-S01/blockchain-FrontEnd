import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      prenom: ['', Validators.required],
      middleName: ['', Validators.required],
      nom: ['', Validators.required],
      cin: ['', Validators.required],
      birthDate: ['', Validators.required],
      deliveranceDate: ['', Validators.required],
      expirationDate: [''], // Optional, so no Validators.requiredhonor: ['', Validators.required],
      diplomaTitle: ['', Validators.required],
      diplomaLink: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
      // Perform your form submission logic here
    } else {
      console.log('Form not valid');
    }
  }
  
}
