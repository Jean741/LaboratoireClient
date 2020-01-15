import { Component, OnInit } from '@angular/core';
import {Publication} from '../models/publication.model';
import {Membre} from '../models/membre.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PublicationService} from '../services/publication.service';
import {MembreService} from '../services/membre.service';
import {Router} from '@angular/router';
import {EvenementService} from '../services/evenement.service';
import {Evenement} from '../models/evenement.model';

@Component({
  selector: 'app-evenements-view',
  templateUrl: './evenements-view.component.html',
  styleUrls: ['./evenements-view.component.css']
})
export class EvenementsViewComponent implements OnInit {


  publications: Evenement[];
  membres: Membre[];
  publicationForm: FormGroup;
  listAuteurs= new  FormControl();
  ajouter: boolean = false;

  constructor(private evenementService: EvenementService,
              private membreService: MembreService, private formBuilder: FormBuilder,
              private router: Router) {
    this.publicationForm = this.formBuilder.group({
      dateEVT: ['', Validators.required],
      lieu: '',
    });

  }

  ngOnInit() {
    this.getEvenement();
    this.loadMembres();
  }



  loadMembres() {
    this.membreService.getMembres().subscribe(
      data => {
        this.membres = data;
        console.log(data);
      },
      error => {
        console.log('on a une erreur');
      },
      () => {
        console.log();
      }
    );
  }


  getEvenement() {
    this.evenementService.getEvenement().subscribe(
      data => {
        this.publications = data;
        console.log(data);
      },
      error => {
        console.log('on a une erreur');
      },
      () => {
        console.log();
      }
    );
  }

  showPublication() {
    this.ajouter = true;
  }

  annuler(){
    this.ajouter=false
  }
  ajouterPublication() {
    this.ajouter = false;
    const evenement: Evenement = this.publicationForm.value;
    this.publicationForm.reset();
    evenement.organisateurs=this.listAuteurs.value;
    this.listAuteurs.reset();
    console.log(evenement);

    this.evenementService.ajouterEvenement(evenement).subscribe(
      res => {
        console.log(res);
        this.ajouter=false;
        this.getEvenement();
      }
    );

  }

  deletePublication(id){
    this.evenementService.deleteEvenement(id).subscribe(
      res =>{
        this.getEvenement();
      }
    );
  }

  editPublication(id){
    this.router.navigate(['/evenements',id]);
  }


  voirMembre(id:number){
    this.router.navigate(['/membres',id]);
  }
}
