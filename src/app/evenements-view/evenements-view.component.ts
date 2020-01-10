import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenements-view',
  templateUrl: './evenements-view.component.html',
  styleUrls: ['./evenements-view.component.css']
})
export class EvenementsViewComponent implements OnInit {

  optionsSelect: Array<any>;

  constructor() { }

  ngOnInit() {


    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
  }

}
