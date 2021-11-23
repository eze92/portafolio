import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true ;
  //cada uno de los productos el del tipo
  //de la intarface
  productos: ProductoInterface[] = [];

  //inyecto la dependencia htpp para conectar 
  //a la base
  constructor( private http: HttpClient) {

    this.cargarProductos();

   }
   private cargarProductos(){

    this.http.get('https://angular-html-8b8c1-default-rtdb.firebaseio.com/productos_idx.json')
      //hace la peticion htpp 
      .subscribe((resp: ProductoInterface) => {

        console.log(resp);

        this.cargando = false;

      });
   }
}
