import { Injectable } from '@angular/core';
import { PedidoGarconComponent } from "./pedido-garcon/pedido-garcon.component";
import { PedidosCocinaComponent } from "./pedidos-cocina/pedidos-cocina.component";

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class PedidoService {
  
  private endPoint = 'http://localhost:3000/pedidos'
  

  //pedidos: any = [];//quando tiro da error, mas tenho que tirar
  //pedido: any = [];
  
  constructor(private http:HttpClient) {}


   // getTodos() {
     //  return this.pedidos;// precisa de pedidos
   // }

    getPedidos(){
      return this.http.get(this.endPoint)
    }

    postPedidos(formData) {
      return this.http.post('http://localhost:3000/pedido',formData) 
    }

    deletePedidos(id){
      return this.http.delete(`${this.endPoint}/${id}`)
    }

}
                
