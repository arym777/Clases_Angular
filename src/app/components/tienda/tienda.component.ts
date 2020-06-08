import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public titulo;
  public nombreDelParque: string;
  public miParque
  
  constructor() {
    this.titulo = "Esta es la Tienda";
   }

  ngOnInit(): void {
  }

  mostrarNombre(){
    console.log(this.nombreDelParque);
  }

  verDatosParque(event){
    this.miParque = event;
  }

}
