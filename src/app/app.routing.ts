import {Routes} from "@angular/router";
import { from } from "rxjs";
import {PedidoGarconComponent} from "./pedido-garcon/pedido-garcon.component";
import {PedidosCocinaComponent} from "./pedidos-cocina/pedidos-cocina.component";
import {PedidosListComponent} from "./pedidos-list/pedidos-list.component";
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    { path: 'pedido-garcon', component: PedidoGarconComponent},
    { path: 'pedidos-cocina', component: PedidosCocinaComponent},
    { path: 'pedidos', component:PedidosListComponent},
    { path: 'home', component:HomeComponent},
    { path:'', redirectTo:'./pedidos-garcon', pathMatch:'full'}
 
];