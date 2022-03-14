import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aqui iria un empleado</p>", //ojoque si el codigoinline tiene mas de una linea no va entre comillas simples sino ``
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red;"]
})
export class EmpleadoComponent implements OnInit {

  nombre="Juan";

  apellido="Diaz";

  edad=8;

  habilitacionCuadro:boolean=false;

  usuRegistrado:boolean=false;

  getRegistroUsuario(){
    this.usuRegistrado=true;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
