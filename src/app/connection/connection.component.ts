import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MembreService} from '../services/membre.service';
import {ToastrService} from 'ngx-toastr';
import {ConnectionService} from '../services/connection.service';
import {User} from '../models/user.model';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  @Input() public conected;
  membretype:number=1;
  @Output() connectionReussie :EventEmitter <number>= new EventEmitter();
  compte:number = 1;
  membreForm:FormGroup;
  connectForm:FormGroup;
  username:string;
  password:string;
  user:User = new User();
  constructor(private membreService: MembreService,private connectionService:ConnectionService ,private toastr:ToastrService,private formBuilder: FormBuilder) {

    this.membretype=1
    this.compte=1
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
      res =>{alert("bien ajoute");
      this.compte=1;
      }
    );
  }
  ajouteEnseignant(){
    const membre = this.membreForm.value;
    console.log(membre);
    this.membreService.ajouterEnseignan(membre).subscribe(
      res =>{alert("bien ajoute");
      this.compte=1;
      }
    );
  }


  connect(){
   /* this.conected=true;
    this.connectionReussie.emit(this.conected);*/
   /* this.connectionService.login(this.username,this.password).subscribe(
      data =>{
        console.log(data);
      });
*/
   console.log(this.user)

    if (this.user.cin=="admin" && this.user.password=="0000"){
      this.conected=-1;
      console.log("je suis en form");
      this.connectionReussie.emit(this.conected);
    }else {

      this.connectionService.connect(this.user).subscribe(
        data =>{
          console.log(data);
          if (data!=-1) {
            this.conected=data;
            this.connectionReussie.emit(this.conected);
          }
        });
    }



  }

  showAlert(){
    this.toastr.success('youAre well','tiltie');
  }
}
