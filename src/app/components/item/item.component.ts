import { Component} from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent{

  constructor( private route: ActivatedRoute) {

    this.route.params.subscribe( parametros => {
      console.log( parametros );
    })

  }



}
