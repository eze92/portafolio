import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private htpp: HttpClient) { 

    this.cargarInfo();
    this.cargarEquipo();
  
    }
    private cargarInfo(){
       // console.log('servicio de infoPagina listo');
      //ruta del json
    this.htpp.get('assets/data/data-pagina.json')
    //suscribe recibe una respuesta 
    //InfoPagina es la interface donde va tomar los datos
    .subscribe((resp: InfoPagina) =>{
    
      this.cargada = true;
      this.info = resp;
  //    console.log(resp);
    }); 
  }
  // se crea nuevo metodo para levantar los datos cargados en firebase
  //el arreglo any es toma arriba en equipo de ahi toma los datos para ser usados
    private cargarEquipo(){
      this.htpp.get('https://angular-html-8b8c1-default-rtdb.firebaseio.com/equipo.json')
    //suscribe recibe una respuesta 
    .subscribe( (resp: any ) =>{
    
      this.equipo = resp;
     // console.log(resp);
    }); 
  }
  
}
