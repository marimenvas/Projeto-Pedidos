import { Injectable } from '@angular/core';
import { PedidoGarconComponent } from "./pedido-garcon/pedido-garcon.component";
import { PedidosCocinaComponent } from "./pedidos-cocina/pedidos-cocina.component";

import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidos: any = [];
  pedido: any = [];
  
  constructor(private http:HttpClient) {}


    getTodos() {
       return this.pedidos;
    }

    getPedidos(){
      return this.http.get('http://localhost:3000/pedidos')
    }

    postPedido() {
      let pedido = { Id: "" };
    
      this.http.post('http://localhost:3000/pedido', pedido)
                .subscribe(
                  resultado => {
                    console.log(resultado)
                  },
                  erro => {
                    if(erro.status == 400) {
                      console.log(erro);
                    }
                  }
                );
    }
    
  
}
 
