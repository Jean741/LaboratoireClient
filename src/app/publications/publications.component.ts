import { Component, OnInit } from '@angular/core';
import {Publication} from '../models/publication.model';
import {PublicationService} from '../services/publication.service';
import {MembreService} from '../services/membre.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  publication: Publication;
  type:string;
  lien:string;
  sourcePdf:string;
  constructor(
    private publicationService: PublicationService,
    private membreService: MembreService, private formBuilder: FormBuilder,
    private router: Router,
    private route:ActivatedRoute
  ) {


  }

  ngOnInit() {
    this.getPublicationById(parseInt(this.route.snapshot.paramMap.get('id')));

  }


  getPublicationById(id:number) {
    this.publicationService.getPublicationById(id).subscribe(
      data => {
        this.publication = data;
        this.type=this.publication.type;
        this.lien=this.publication.lien;
        this.sourcePdf=this.publication.sourcePdf;
        console.log(this.publication);
      },
      error => {
        console.log('on a une erreur');
      },
      () => {
        console.log();
      }
    );
  }

  updatePublication() {

     const pub:Publication= new  Publication();
    pub.type=this.type;
    pub.sourcePdf=this.sourcePdf;
    pub.lien=this.lien;
    pub.dateApparition = this.publication.dateApparition;
    pub.auteurs=[]


    for (let a of this.publication.auteurs){

      pub.auteurs.push(a.id);
    }
    console.log(pub);

    this.publicationService.updatePublication(this.publication.id, pub).subscribe(
      res => {
        console.log(res);

        this.getPublicationById(parseInt(this.route.snapshot.paramMap.get('id')));
      }
    );

  }

  voirMembre(id:number){
    this.router.navigate(['/membres',id]);
  }
  annuler(){

  }

}
