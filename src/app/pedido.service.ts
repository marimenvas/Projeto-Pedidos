import { Injectable } from '@angular/core';
import { PedidoGarconComponent } from "./pedido-garcon/pedido-garcon.component";
import { PedidosCocinaComponent } from "./pedidos-cocina/pedidos-cocina.component";

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidos: any = [{
    
      "id": 1,
      "productId": 2,
      "mesaid": 2,
      "status_pedido": 1,
    },

    {
      "id": 2,
      "productId": 3,
      "mesaid": 2,
      "status_pedido": 2,
    },

    {
      "id": 3,
      "productId": 2,
      "mesaid": 2,
      "status_pedido": 0,
    }];
  
  constructor() {}

    getTodos() {
       return this.pedidos;
    }
  
}
 
