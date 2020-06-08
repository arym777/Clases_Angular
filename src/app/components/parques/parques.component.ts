import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit {
  @Input() nombre: string;
  @Input('metros_cuadrados') metros: number
  public vegetacion: string
  public abierto: boolean

  @Output() pasameLosDatos = new EventEmitter();

  constructor() {
    this.nombre = 'Parque de caballos'
    this.metros = 456
    this.vegetacion = 'Alta'
    this.abierto = false;
   }

  ngOnInit(): void {
  }

  emitirEvento(){
    this.pasameLosDatos.emit({
      'nombre': this.nombre,
      'metros': this.metros,
      'vegetacion': this.vegetacion,
      'abierto': this.abierto 
    });
  }

}
