import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ClientLaboratoire';
  conected : boolean =false;
  admin:boolean=false;
  constructor(private router: Router){
    this.conected =false;
    this.admin= false;
  }
  ngOnInit(): void {
  }

  onConnect(conected){

    this.conected = conected;
    if (conected==-1){
      this.admin=true;
      this.router.navigate(['/membres']);
    }

    else{
      this.router.navigate(['/membres',conected]);
    }


  }

}
