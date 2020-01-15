import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() public conected;
  @Output() connectionReussie :EventEmitter <boolean>= new EventEmitter();

  startConnect:boolean=false;
  constructor(private router:Router) { }

  ngOnInit() {
    this.startConnect=false;
  }

  connect(){
    this.startConnect=true;

  }


  onConnect(connet){
    this.conected=connet;
    this.connectionReussie.emit(this.conected);
  }

}
