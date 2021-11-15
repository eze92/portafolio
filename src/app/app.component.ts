import { Component } from '@angular/core';
import { InfoPaginaService } from './services/infoPagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'portafolio';

  //realizo inyeccion de dependencia del servicio

  constructor( public _infoPaginaService:InfoPaginaService ) {

    //Leer archivo json
  }
}
