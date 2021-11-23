import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true ;

  //inyecto la dependencia htpp para conectar 
  //a la base
  constructor( private http: HttpClient) {

    this.cargarProductos();

   }
   private cargarProductos(){

    this.http.get('https://angular-html-8b8c1-default-rtdb.firebaseio.com/productos_idx.json')
      //hace la peticion htpp 
      .subscribe((resp: any) => {

        console.log(resp);

        this.cargando = false;

      });
   }
}
