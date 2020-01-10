import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MembreService} from '../services/membre.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  @Input() public conected;
  membretype:number=1;
  @Output() connectionReussie :EventEmitter <boolean>= new EventEmitter();
  compte:number = 0;
  membreForm:FormGroup;
  connectForm:FormGroup;

  constructor(private membreService: MembreService, private toastr:ToastrService,private formBuilder: FormBuilder) {
    this.membreForm=this.formBuilder.group({
      cin:["",Validators.required],
      nom:"",
      prenom:"",
      email:"",
      password:"",
      dateNaissance: ["",Validators.required],
      cv:"",
      foto:"",
      grade:"",
      etablissement:"",
      dateInscription:"",
      sujet:"",
      diplome:"",

    });

    this.connectForm=this.formBuilder.group({
      cin:["",Validators.required],
      password:["",Validators.required]
    });
  }
  ngOnInit() {
  }

  ajouterMembre(){
   if (this.membretype==1){
     this.ajouteEnseignant();
   } else if (this.membretype==2){
     this.ajouteEtudiant();
   }
   }
  ajouteEtudiant(){
    const membre = this.membreForm.value;
    this.membreService.ajouterEtudiant(membre).subscribe(
      res =>{alert("bien ajoute");this.connect();}
    );
  }
  ajouteEnseignant(){
    const membre = this.membreForm.value;
    console.log(membre);
    this.membreService.ajouterEnseignan(membre).subscribe(
      res =>{alert("bien ajoute");this.connect();}
    );
  }


  connect(){
    this.conected=true;
    this.connectionReussie.emit(this.conected);
  }

  showAlert(){
    this.toastr.success('youAre well','tiltie');
  }
}
