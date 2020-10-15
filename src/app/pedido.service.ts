import { Injectable } from '@angular/core';
import { PedidoGarconComponent } from "./pedido-garcon/pedido-garcon.component";
import { PedidosCocinaComponent } from "./pedidos-cocina/pedidos-cocina.component";

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'




@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private endPoint = 'http://localhost:3000/pedidos'

  formData: PedidoGarconComponent
  formDataVacio: PedidoGarconComponent [];

  pedidos: any = [];
  pedido: any = [];
  
  constructor(private http:HttpClient) {}

  public todos():Observable<any> {
    return this.http.get(`${this.endPoint}`);
  }

  private extractData(res: Response){
    return res.json() || {};

  }

  UpdatePedido(){
    var body= {
      ...this.formData,
      formDataVacio: this.formDataVacio
    };
    //return this.http.post(environment.apiURL+'/pedido', body);
  }


    getTodos() {
       return this.pedidos;
    }

    getPedidos(){
      return this.http.get('http://localhost:3000/pedidos')
    }

    deletePedidos(){
      return this.http.delete('http://localhost:3000/pedido/:id')
    }

    postPedido(formData) {
        return this.http.post('http://localhost:3000/pedido',formData);
      }

    putPedido () {
        return this.http.put('http://localhost:3000/pedido/:id',this.formData);
      }
    
   // return this.http.get('http://localhost:3000/pedidos/:id')
    
      //this.http.post('http://localhost:3000/pedido', pedido)
                //.subscribe(
                 // resultado => {
                   // console.log(resultado)
                  //},
                 // erro => {
                    //if(erro.status == 400) {
                     // console.log(erro);
                    }
                 // }
                //);
    //}
    
  
//}
 
