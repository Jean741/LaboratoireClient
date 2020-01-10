import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { MembreViewComponent } from "./membre-view/membre-view.component";
import { MembreComponent } from "./membre/membre.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RoleComponent } from "./role/role.component";
import {RouterModule, Routes} from '@angular/router';
import { PublicationsComponent } from './publications/publications.component';
import { PublicationsViewComponent } from './publications-view/publications-view.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MembreService} from './services/membre.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { ConnectionComponent } from './connection/connection.component';
 import { EvenementsViewComponent } from './evenements-view/evenements-view.component';
import { EvenementComponent } from './evenement/evenement.component';
import { OutilsComponent } from './outils/outils.component';
import {PublicationService} from './services/publication.service';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule,
  MatSelect,
  MatSelectModule,
  MatSliderModule, MatTreeModule
} from '@angular/material';
import {RoleService} from './services/role.service';
import { HomeComponent } from './home/home.component';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    MembreComponent,
    MembreViewComponent,
    RoleComponent,
    NavbarComponent,
    PublicationsComponent,
    PublicationsViewComponent,
    ConnectionComponent,
    EvenementsViewComponent,
    EvenementComponent,
    OutilsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot(),
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatTreeModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatCardModule
  ],

  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    MembreService,
    PublicationService,
    RoleService,
  ],

  bootstrap: [AppComponent],
})
export class AppModule { }
