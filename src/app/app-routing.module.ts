import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateCertificateComponent } from './create-certificate/create-certificate.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ViewCertificatesComponent } from './view-certificates/view-certificates.component';
import { ViewMyCertificateComponent } from './view-my-certificate/view-my-certificate.component';
import { CertificateViewComponent } from './certificate-view/certificate-view.component';
import { VerifyCertificateComponent } from './verify-certificate/verify-certificate.component';

const routes: Routes = [
  {
    path: 'connexion',
    component: LoginComponent,
  },
  {
    path: '',
    component: SignUpComponent,
  },
  {
    path: 'accueil',
    component: AccueilComponent,
  },
  {
    path: 'create-certificate',
    component: CreateCertificateComponent,
  },
  {
    path: 'view-certificates',
    component: ViewCertificatesComponent,
  },
  {
    path: 'view-my-certificates',
    component: ViewMyCertificateComponent,
  },
  {
    path: 'view-my-certificate/:id',
    component: CertificateViewComponent,
  },
  {
    path: 'verify-certificate',
    component: VerifyCertificateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
