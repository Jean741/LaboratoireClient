import {Component, OnInit} from '@angular/core';
import {Publication} from '../models/publication.model';
import {PublicationService} from '../services/publication.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MembreService} from '../services/membre.service';
import {Membre} from '../models/membre.model';

@Component({
  selector: 'app-publications-view',
  templateUrl: './publications-view.component.html',
  styleUrls: ['./publications-view.component.css']
})
export class PublicationsViewComponent implements OnInit {

  publications: Publication[];
  membres: Membre[];
  publicationForm: FormGroup;
  listAuteurs= new  FormControl();
  ajouter: boolean = false;

  constructor(private publicationService: PublicationService,
              private membreService: MembreService, private formBuilder: FormBuilder,
              private router: Router) {
    this.publicationForm = this.formBuilder.group({
      type: ['', Validators.required],
      lien: '',
      sourcePdf: ''
    });

  }

  ngOnInit() {
    this.getPublications();
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


  getPublications() {
    this.publicationService.getPublication().subscribe(
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
    const publication: Publication = this.publicationForm.value;
    this.publicationForm.reset();
    publication.auteurs=this.listAuteurs.value;
    this.listAuteurs.reset();
    console.log(publication);

    this.publicationService.ajouterPublication(publication).subscribe(
      res => {
        console.log(res);
        this.ajouter=false;
        this.getPublications();
      }
    );

  }

  deletePublication(id){
    this.publicationService.deletePublication(id).subscribe(
      res =>{
        this.getPublications();
      }
    );
  }

  editPublication(id){
    this.router.navigate(['/publications',id]);
  }


}
