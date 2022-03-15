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

  empresa:String="Google";

/*   cambiarEmpresa(event:Event){
    this.empresa= (<HTMLInputElement>event.target).value
  } */

  habilitacionCuadro:boolean=false;

  usuRegistrado:boolean=false;

  textoDeRegistro:String="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }
  myHTMLInputElement:HTMLInputElement;

  setUsuarioRegistrado(event:Event){
    // alert("El usuario se acaba de registrar");
   // this.textoDeRegistro="El usuario se acaba de registrar";
/*     alert("tipo de event.target: "+typeof(event.target) + "; " + "event.target: " +event.target + "; event:" +event +"; tipo de textoDeRegistro: "+typeof(this.textoDeRegistro)
    +"; tipo de myHTMLInputElement: "+typeof(this.myHTMLInputElement) +"; tipo de <HTMLInputElement>event.target: "+typeof(<HTMLInputElement>event.target)
    +"; tipo de <HTMLInputElement>event.target.value: "+typeof((<HTMLInputElement>event.target)).value
    +"; tipo de <HTMLInputElement>event.target: "+typeof((<HTMLInputElement>event.target)
    +"; <HTMLInputElement>event.target2: "+<HTMLInputElement>event.target)
    ); */
    if((<HTMLInputElement>event.target).value=="sí"){
      this.textoDeRegistro="El usuario se acaba de registrar";
    }else{this.textoDeRegistro="No hay nadie registrado";}

  }


  constructor() { }

  ngOnInit(): void {
  }

}
