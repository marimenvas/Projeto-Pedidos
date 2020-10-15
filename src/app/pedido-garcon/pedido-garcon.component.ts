import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { FormsModule } from "@angular/forms";
import { enableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-pedido-garcon',
  templateUrl: './pedido-garcon.component.html',
  styleUrls: ['./pedido-garcon.component.css'],
 
})
export class PedidoGarconComponent implements OnInit {

  // NÃO FAZ ISSO PELO AMOR DE DEUS, url de API fica no serviço única e exclusivamente!
  readonly apiURL : string;

  constructor(pedidosServ: PedidoService) {

    // NÃO FAZ ISSO PELO AMOR DE DEUS, url de API fica no serviço única e exclusivamente 2!
    this.apiURL = 'http://localhost:3000';
   // pedidosServ.getPedidos().subscribe(pedidos=> {
     // this.pedidos = pedidos
    //});

   // pedidosServ.postPedido().subscribe(pedido => {
    //this.pedido = pedido
    //});
    
  }

  msg:string = ''

  // Aqui siiim :D, lá no service NÃO! Esses arrays de pedidos e pedido precisam ficar aqui!
  pedidos: any = [];
  pedido: any = [];
 
  // Model? Chamando o próprio componente? Que? 
  // Esse código não fez sentido para mim, está funcionando corretamente?
  model:any={PedidoGarconComponent};
  model2:any={};
  hideUpdate:boolean = true;

  addPedido():void{
  
    this.pedidos.push(this.model);
    this.msg = 'pedido carregado';
  }

  // Se não usa, tira :). Mantenha o código limpo
  addGetPedido():void{
  }

  // ele só deleta da lista na tela, não deveria enviar para a api também?
  // E quando a api retornar sucesso na remoção, atualizar a lista para o usuário que está vendo
  deletePedido(i):void{
    var answer = confirm ('Está seguro que quer deletar?');
    if(answer){
      this.pedidos.splice(i, 1);
      this.msg = 'pedido deletado';
    }
  }

  // Variável declarada no meio do código? Não faça isso!
  // declare tudo ná em cima no começo para manter a organização
  myValue;

  // é interessante informar o tipo do método, mas, não é obrigatório!
  // então se quiser, pode remover o :void para simplificar
  // Não use "i" como nome de variável, use nomes mais descritivos. 
  // Olhando "i" não sei do que se tratam esses dados
  editPedido(i):void{
    this.hideUpdate = false;
    this.model2.mesaid = this.pedidos[i].mesaid;
    this.model2.id = this.pedidos[i].id;
    this.model2.productId = this.pedidos[i].productId;
    this.myValue = i;
  }

  // Não faria mais sentido esse método receber os dados que precisa atualizar no pedido?
  updatePedido():void{
    let i = this.myValue;
    for(let j = 0; j < this.pedidos.length;j++){
      if(i == j) {
        this.pedidos[i] = this.model2;
        this.msg = 'pedido atualizado';
        this.model2 = {};
      }
    }
  }

  // Se não tem utidade, não faz sentido manter. Pode tirar!
  // tira também o "implements OnInit" lá no início da classe
  ngOnInit(): void {
  }

  closeAlert(): void{
    this.msg ='';}
  }
