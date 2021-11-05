import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: any = {};
  cargada = false;

  constructor(private htpp: HttpClient) { 
   // console.log('servicio de infoPagina listo');
//ruta del json
    this.htpp.get('assets/data/data-pagina.json')
    //suscribe recibe una respuesta 
    .subscribe(resp =>{
    
      this.cargada = true;
      this.info = resp;
      console.log(resp);
    })
  }
}
