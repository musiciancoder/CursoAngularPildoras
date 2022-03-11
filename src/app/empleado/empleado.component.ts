import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aqui iria un empleado</p>", //ojoque si el codigoinline tiene mas de una linea no va entre comillas simples sino ``
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red;"]
})
export class EmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
