import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keeper',
  templateUrl: './keepers.component.html',
  styleUrls: ['./keepers.component.css']
})
export class KeepersComponent implements OnInit {
  title = 'KEEPERS'
  constructor() { }

  ngOnInit(): void {
    console.log('keep.component CARGADO !!');
  }

}
