import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  //productos: Producto = {};
  info: Producto = {};
  productos: any[] = [];
  cargando = true ;
  productosFiltrado : Producto[] = [];
  //cada uno de los productos el del tipo
  //de la intarface
 

  //inyecto la dependencia htpp para conectar 
  //a la base
  constructor( private http: HttpClient) {

    this.cargarProductos();

   }
   private cargarProductos(){

    //creo uno promesa para trabajar de forma asincrona 
    return new Promise( (resolve,reject) => {
      this.http.get('https://angular-html-8b8c1-default-rtdb.firebaseio.com/productos_idx.json')
      //hace la peticion htpp 
      .subscribe((resp: any) => {

       // console.log(resp);
        this.productos = resp;
        this.cargando = false;
        /*/ timeout para probar el loading
        setTimeout(() => {
          this.cargando = false;
        },2000);
        */
        
      });
    } );

   }
   getProducto( id: string){
      
    return this.http.get(`https://angular-html-8b8c1-default-rtdb.firebaseio.com/productos/${ id }.json`);
   }

   buscarProducto (termino : string){

      if(this.productos.length === 0){
        //cargar productos
        this.cargarProductos().then( () => {
          //ejecutar despues de tener los productos
          //aplicar el filtro
         this.filtarProductos(termino);
        });

      }else{
        //aplicar el filtro
        this.filtarProductos(termino);
      }
      

      
   }
   private filtarProductos(termino : string){
     
    console.log(this.productos);
    //purgo el arreglo para que no aparezca dos veces la imagen
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();


    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if(prod.categoria.indexOf(termino)>=0 || tituloLower.indexOf(termino ) >=0 ) {
        this.productosFiltrado.push(prod);
      }
     
    });
   }
   
}
