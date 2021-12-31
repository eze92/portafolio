import { NgModule, Component } from '@angular/core';

//RouterModule dice si son rutas principales o fijas a angular
import {Routes,RouterModule} from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';


//constante de tipo Routes
//arreglo de rutas a donde va redirigir
const app_routes: Routes = [
    //ruta vacia
    {path: 'home',component: PortafolioComponent },
    {path:'about',component:AboutComponent},
    {path: 'item/:id',component:ItemComponent},
    {path: 'search/:termino',component:SearchComponent},
    //ruta que no este aca / exepcion 
    //y redireccion a portafolio 1ra ruta
    //pathMatch para que sea cualquier ruta
    {path: '**', pathMatch: 'full',redirectTo: 'home'}

];
//importo un arreglo de rutas , el que tengo arriba
@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, {useHash: true})
    ],//se exporta el RouterModule para que tome de app.module  <router-outlet></router-outlet> y pueda cambiar de pagina
    exports:[
        RouterModule
    ]

})
//se crea la clase para redireccionar las paginas para que se mas facil de mantener
export class AppRoutingModule{

}