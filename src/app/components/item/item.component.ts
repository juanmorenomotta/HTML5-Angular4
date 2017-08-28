import { Component} from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent{

  item:any = undefined;
  id:number = undefined;

  constructor(  private route: ActivatedRoute,
                private _ps: ProductosService ) {

    this.route.params.subscribe( parametros => {
      /*
      console.log( parametros );
      console.log( parametros['id'] );
      */
      _ps.cargar_producto( parametros['id'] )
          .subscribe( res => {

            this.item = res.json();
            this.id = parametros['id'];
            console.log( this.item );
          });
    })

  }

}
