import { Component, OnInit } from '@angular/core';
import {MembreService} from '../services/membre.service';
import {Membre} from '../models/membre.model';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-membre-view',
  templateUrl: './membre-view.component.html',
  styleUrls: ['./membre-view.component.css']
})
export class MembreViewComponent implements OnInit {


  load:boolean=false;
  membres:Membre[];
  membreForm:FormGroup;
  membretype:number=1;
  constructor(private membreService: MembreService,
              private formBuilder: FormBuilder,
              private router:Router) {
    this.membreForm=this.formBuilder.group({
      cin:["",Validators.required],
      nom:"",
      prenom:"",
      email:"",
      password:""
    });
  }

  ngOnInit() {
    this.loadChoise();
  }

  loadChoise(){

  if(this.membretype==1){
    this.chargerEnseignant();
  }else if(this.membretype==2){
    this.chargerEtudiant();
  }else {
    this.loadMembres();
  }
 }
  loadMembres(){
    this.membreService.getMembres().subscribe(
      data =>{this.membres=data;
      this.load=true;
      },
      error => {console.log("on a une erreur")},
      () =>{console.log()}
    );
  }

  chargerEtudiant(){
    this.membreService.chargerEtudiant().subscribe(
      data =>{this.membres=data;console.log(data);},
      error => {console.log("on a une erreur")},
      () =>{console.log()}
    );
  }

  chargerEnseignant(){
    this.membreService.chargerEnseignant().subscribe(
      data =>{this.membres=data;console.log(data);},
      error => {console.log("on a une erreur")},
      () =>{console.log()}
    );
  }


  ajouterMembre(){

    if(this.membretype==1){
      this.ajouteEnseignant();
    }else if(this.membretype==2){
      this.ajouteEtudiant();
    }  }
  ajouteEtudiant(){
    const membre = this.membreForm.value;
    this.membreService.ajouterEtudiant(membre).subscribe(
      res =>{this.loadMembres();alert("bien ajoute")}
    );
  }
 ajouteEnseignant(){
   const membre = this.membreForm.value;
   console.log(membre);
   this.membreService.ajouterEnseignan(membre).subscribe(
     res =>{this.loadMembres();alert("bien ajoute")}
   );
  }

  deleteMembre(id){
    this.membreService.deleteMembre(id).subscribe(
      res =>{
        this.loadChoise();
      }
    );
  }

  editMembre(id){
    this.router.navigate(['/membres',id]);
  }
}
