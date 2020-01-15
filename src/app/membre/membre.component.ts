import {Component, Input, OnInit} from '@angular/core';
import {Membre} from '../models/membre.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MembreService} from '../services/membre.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PublicationService} from '../services/publication.service';
import {Publication} from '../models/publication.model';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {

   membre:Membre;
   publications:Publication[];
  constructor(private membreService: MembreService,
              private publicationService: PublicationService,
              private formBuilder: FormBuilder,
              private route:ActivatedRoute) {

  }
  ngOnInit() {
    this.getMembre(parseInt(this.route.snapshot.paramMap.get('id')));
    this.getMemberPublication(parseInt(this.route.snapshot.paramMap.get('id')));
  }

  getMembre(id:number){
      this.membreService.getMembre(id).subscribe(
      data =>{this.membre=data;console.log(data);},
      error => {console.log("on a une erreur")},
      () =>{console.log()}
    );
  }

  getMemberPublication(id:number){
    this.publicationService.getMemberPublication(id).subscribe(
      data =>{this.publications=data;console.log(data);},
      error => {console.log("on a une erreur")},
      () =>{console.log()}
    );
  }




}
