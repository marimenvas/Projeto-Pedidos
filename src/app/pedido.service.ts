import { Injectable } from '@angular/core';
import { PedidoGarconComponent } from "./pedido-garcon/pedido-garcon.component";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  readonly apiURL : string;
  
  constructor(private http:HttpClient) {
      this.apiURL= 'http://localhost:3000';
  }

  listAllPedidos() {
    this.http.get(`${ this.apiURL }/pedidos`)
             .subscribe(resultado => console.log(resultado));
  }

  deleteProduto() {
    this.http.delete(`${ this.apiURL }/pedido/1`)
              .subscribe(
                resultado => {
                  console.log('Produto excluído com sucesso.');
                },
                erro => {
                  if(erro.status == 404) {
                    console.log('Produto não localizado.');
                  }
                }
              );
  }
  
  
}
 
