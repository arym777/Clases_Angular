import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
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
    console.log('metodo onInit Lanzado');
  }

  ngDoCheck(){
    console.log('DoCheck se ha ejecutado')
  }

  ngOnDestroy(){
    console.log('Se elimina el componente')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
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
