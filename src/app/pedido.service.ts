import { Injectable } from '@angular/core';
import { PedidoGarconComponent } from "./pedido-garcon/pedido-garcon.component";
import { PedidosCocinaComponent } from "./pedidos-cocina/pedidos-cocina.component";

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class PedidoService {
  
  private endPoint = 'http://localhost:3000'
  

  //pedidos: any = [];//quando tiro da error, mas tenho que tirar
  //pedido: any = [];
  
  constructor(private http:HttpClient) {}


   // getTodos() {
     //  return this.pedidos;// precisa de pedidos
   // }

    getPedidos(){
      return this.http.get(`${this.endPoint}/pedidos`)
    }

    postPedidos(formData) {
      return this.http.post(`${this.endPoint}/pedido`,formData) 
    }

    deletePedidos(id){
      return this.http.delete(`${this.endPoint}/pedido/${id}`)
    }

    editPedidos(dadosPedido){
      return this.http.put(`${this.endPoint}/pedido/${dadosPedido.id}`,{
        productId: dadosPedido.productId,
        mesaid: dadosPedido.mesaid,
        status_pedido: dadosPedido.status_pedido,
        is_active: dadosPedido.is_active
      })
    }

}
           