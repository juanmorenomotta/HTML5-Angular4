import { Component } from '@angular/core';
import { InformacionService } from "../../services/informacion.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent  {

  anio:number = new Date().getUTCFullYear();

  constructor( public _is: InformacionService ) { 
  }


}
