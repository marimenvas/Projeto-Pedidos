import { Injectable } from '@angular/core';
import { PedidoGarconComponent } from "./pedido-garcon/pedido-garcon.component";
import { PedidosCocinaComponent } from "./pedidos-cocina/pedidos-cocina.component";

import { HttpClient } from '@angular/common/http';

// Tira essa linha, não precisa
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private endPoint = 'http://localhost:3000/pedidos'

  // Não faça isso!
  formData: PedidoGarconComponent
  // Nem isso :P, serviço não se comunica com outros componentes, os 
  // outros componentes que se comunicam com o serviço 
  formDataVacio: PedidoGarconComponent [];

  // Serviço não fica com os dados, tira! 
  // Um serviço apenas recebe dados e repassa ao componente, não deve armazenar ou gerenciar
  pedidos: any = [];
  pedido: any = [];
  
  constructor(private http:HttpClient) {}

  // Tira o :Observable<any>, não precisa também
  public todos():Observable<any> {

    // Não precisa usar o `${}`, isso serve para unir strings diferentes
    // Aqui você não une nenhuma sting, apenas coloca a de URL
    // Use assim:  this.http.get(this.endPoint});'
    return this.http.get(`${this.endPoint}`);
  }

  // Para que serve essa função?? Tira! Não precisamos dela
  private extractData(res: Response){
    return res.json() || {};

  }

  // Nenhum lugar do projeto usa essa função, tira!
  UpdatePedido(){
    var body= {
      ...this.formData,
      formDataVacio: this.formDataVacio
    };
    //return this.http.post(environment.apiURL+'/pedido', body);
  }

    // O todos faz o que esse método faz, não faz sentido usar ele, tira!
    getTodos() {
       return this.pedidos;
    }

    getPedidos(){
      // Não coloque a string toda, se você quiser mudar a URL do servidor, você precisa mudar em cada
      // função. Use o da variável endPoint
      return this.http.get('http://localhost:3000/pedidos')
    }

    // Cadê o id? Como a API vai saber qual pedido deve excluir?
    // Passe para esta função um ID: deletePedidos()
    deletePedidos(){
      // Não coloque a string toda, se você quiser mudar a URL do servidor, você precisa mudar em cada
      // função. Use o da variável endPoint e concatene com o id. Aqui você pode usar o `${}`
      // Exemplo: `${this.endPoint}/${id}`
      return this.http.delete('http://localhost:3000/pedido/:id')
    }

    postPedido(formData) {
       // Não coloque a string toda, se você quiser mudar a URL do servidor, você precisa mudar em cada
      // função. Use o da variável endPoint
        return this.http.post('http://localhost:3000/pedido',formData);
      }


    // Cadê os dados do pedido? Como o método vai saber o que enviar para a api???
    // Este método tem que ser algo como: putPedido (id, data)
    putPedido () {
         // Não coloque a string toda, se você quiser mudar a URL do servidor, você precisa mudar em cada
        // função. Use o da variável endPoint
        // o formData tem que vir como parâmetro do método, não de uma variável global do serviço. 
        // NÃO USE variável global em serviço. Serviço não é componente!!!
        return this.http.put('http://localhost:3000/pedido/:id',this.formData);
      }
    
   // return this.http.get('http://localhost:3000/pedidos/:id')
    


// JAMAIS use subscribe aqui. Subscribe tem que ser no componente que irá consumir os dados, ok? 


      //this.http.post('http://localhost:3000/pedido', pedido)
                //.subscribe(
                 // resultado => {
                   // console.log(resultado)
                  //},
                 // erro => {
                    //if(erro.status == 400) {
                     // console.log(erro);
                    // }
                 // }
                //);
    //}
    
  
}