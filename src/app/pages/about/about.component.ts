import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/infoPagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  //inyecto el infoService para ser utilizado en el html
  constructor(public infoService:InfoPaginaService) { }

  ngOnInit(): void {
  }

}
