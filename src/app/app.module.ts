import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateCertificateComponent } from './create-certificate/create-certificate.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewCertificatesComponent } from './view-certificates/view-certificates.component';
import { ViewMyCertificateComponent } from './view-my-certificate/view-my-certificate.component';
import { CertificateViewComponent } from './certificate-view/certificate-view.component';


@NgModule({
  declarations: [
    /* les différents components */ AppComponent,
    LoginComponent,
    SignUpComponent,
    CreateCertificateComponent,
    AccueilComponent,
    ViewCertificatesComponent,
    ViewMyCertificateComponent,
    CertificateViewComponent,

  ],
  imports: [
    /* Mettre les autres modules importés à part NgModule */
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,

    
  ],
  providers: [AuthService] /*Mettre les services */,
  bootstrap: [AppComponent] /*Quel composant va s'exécuter en premier ?*/,
})
export class AppModule {}
