import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  title = 'ANIMALS'
  constructor() { }

  ngOnInit(): void {
    console.log('animals.componente CARGADO !!')
  }

}
