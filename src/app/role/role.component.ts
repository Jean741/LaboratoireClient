import { Component, OnInit } from '@angular/core';
import {MembreService} from '../services/membre.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Membre} from '../models/membre.model';
import {RoleService} from '../services/role.service';
import {Role} from '../models/role.model';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  load:boolean=true;

  roleform:boolean=false;
  addform:boolean=false;
  roleForm:FormGroup;

  roleId:number;
  membreId:number;
  membres:Membre[];
  roles:any[];
  roleMembersMap: { [id: number] : Membre[]; } = {};
  constructor(private membreService: MembreService,
              private roleService: RoleService,
              private formBuilder: FormBuilder,
              private router:Router) {
    this.roleForm=this.formBuilder.group({
      roleName:["",Validators.required],
    });
  }

  ngOnInit() {
    this.loadRoles();
    this.loadMembres();
  }


  deleteRole(id :number){
    this.roleService.deleteRole(id).subscribe(
      res =>{
        this.loadRoles();
      }
    );
  }
  showAddForm(idR:number){
    this.addform=true;
    this.roleId=idR
   }
  closeform(idM:number){
    this.addform=false;
    this.membreId=idM;
    this.addMembreFromRole(this.roleId,this.membreId);
  }
  deleteMembreFromRole(idR:number,idM:number){
    this.roleService.deleteMembreFromRole(idR,idM).subscribe(
      res =>{this.loadRoles();
        this.roleForm.reset();
      }
    );
  }

  addMembreFromRole(idR:number,idM:number){
    this.roleService.addMembreFromRole(idR,idM).subscribe(
      res =>{this.loadRoles();
        this.roleForm.reset();
      }
    );
  }

  loadMembres(){
    this.membreService.getMembres().subscribe(
      data =>{this.membres=data;
      },
      error => {console.log("on a une erreur")},
      () =>{console.log()}
    );
  }
  ajouterRole(){
    const role = this.roleForm.value;
    this.roleService.ajouterRole(role).subscribe(
      res =>{this.loadRoles();
        this.roleForm.reset();
      }
    );
    this.roleform=false;
  }
  showRoleForm(){
    this.roleform=true;
  }
  loadMembresRoles(){
    for(let role of this.roles){
      this.roleService.getMemberRole(role.id).subscribe(
        data =>{
        console.log("on a une liste")
          this.roleMembersMap[role.id]=data;
          console.log(this.roleMembersMap)
        },
        error => {console.log("on a une erreur")},
        () =>{console.log()}
      );
    }

    this.load=true;
    }

  loadRoles(){
    this.roleService.getAllRoles().subscribe(
      data =>{this.roles=data;
      console.log(data)
        this.loadMembresRoles();

        console.log("le mode va bien");
       },
      error => {console.log("on a une erreur")},
      () =>{console.log()}
    );
  }





}
