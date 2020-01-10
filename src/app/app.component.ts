import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ClientLaboratoire';
  conected : boolean =true;
  constructor(private router: Router){

  }
  ngOnInit(): void {
  }

  onConnect(conected){
    this.conected = conected;
    this.router.navigate(['/membres']);
  }

}
