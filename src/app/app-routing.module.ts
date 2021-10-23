import { NgModule, Component } from '@angular/core';

//routerModule dice si son rutas principales o fijas a angular
import {Routes,RouterModule} from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';


//constante de tipo Routes
//arreglo de rutas a donde va redirigir
const app_routes: Routes = [
    //ruta vacia
    {path: '',component: PortafolioComponent },
    {path:'about',component:AboutComponent},
    {path: 'item',component:ItemComponent},
    //ruta que no este aca / exepcion 
    //y redireccion a portafolio 1ra ruta
    //pathMatch para que sea cualquier ruta
    {path: '**', pathMatch: 'full',redirectTo: ''}

];
//importo un arreglo de rutas , el que tengo arriba
@NgModule({
    imports: [
        RouterModule.forRoot( app_routes)
    ]

})
//se crea la clase para redireccionar las paginas para que se mas facil de mantener
export class AppRoutingModule{

}