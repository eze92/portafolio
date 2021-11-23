import { Component } from '@angular/core';
import { InfoPaginaService } from './services/infoPagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'portafolio';

  //realizo inyeccion de dependencia del servicio

  constructor( public _infoPaginaService:InfoPaginaService,
               public productosService: ProductosService ) {

    //Leer archivo json
  }
}
