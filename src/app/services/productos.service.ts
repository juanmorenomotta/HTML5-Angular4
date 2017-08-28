import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando: boolean = true;

  constructor( private http: Http ) {
    this.cargar_productos();
  }


  public cargar_producto( id: string ){
    return this.http.get("https://paginaweb-c5ffe.firebaseio.com/productos.json");
  }

  public cargar_productos(){

    if ( this.productos.length === 0 ){
      this.cargando = true;
      this.http.get("https://paginaweb-c5ffe.firebaseio.com/productos_idx.json")
          .subscribe( res => {
              this.productos = res.json();
              this.cargando = false;
          })
    }
  }


}
