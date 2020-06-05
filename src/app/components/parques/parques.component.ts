import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit {
  public nombre: string;
  public metros: number
  public vegetacion: string
  public abierto: boolean

  constructor() {
    this.nombre = 'Parque de caballos'
    this.metros = 456
    this.vegetacion = 'Alta'
    this.abierto = true
   }

  ngOnInit(): void {
  }

}
