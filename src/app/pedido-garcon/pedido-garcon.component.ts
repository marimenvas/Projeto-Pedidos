import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { FormsModule } from "@angular/forms";
import { enableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-pedido-garcon',
  templateUrl: './pedido-garcon.component.html',
  styleUrls: ['./pedido-garcon.component.css'],
 
})

export class PedidoGarconComponent {//implements OnInit {  

  msg:string = '';
  
  myValue;

  pedido: any = [];
  pedidos: any = [];

  model:any={};
  model2:any={};
  hideUpdate:boolean = true;

  onSubmit(formulario){
    this.pedidoServ.postPedidos(formulario.form.value)
    .subscribe(resposta => {
      console.log(resposta);
      alert('Pedido enviado com sucesso!');

    });

    //console.log(formulario.form.value)

  }

  constructor(private pedidoServ: PedidoService) {
    //this.pedidos = pedidosServ.getTodos();// leva a get todos

    pedidoServ.getPedidos().subscribe(pedidos=> {
      this.pedidos = pedidos
    });
  }

  addPedido():void{
    this.pedidos.push(this.model);
    this.msg = 'pedido carregado';
  }

  deletePedido(i):void{
    var answer = confirm ('Está seguro que quer deletar?');
    if(answer){
      this.pedidos.splice(i, 1);
      this.msg = 'pedido deletado';
    }
  }

  editPedido(i):void{// para fazer mudanças no angular não faz enviou para a API
    this.hideUpdate = false;
    this.model2.mesaid = this.pedidos[i].mesaid;
    this.model2.id = this.pedidos[i].id;
    this.model2.productId = this.pedidos[i].productId;
    this.myValue = i;
  }

  updatePedido():void{ // para fazer mudanças no angular não faz enviou para a API
    let i = this.myValue;
    for(let j = 0; j < this.pedidos.length;j++){
      if(i == j) {
        this.pedidos[i] = this.model2;
        this.msg = 'pedido atualizado';
        this.model2 = {};
      }
    }
  }

  ngOnInit(): void {// da erro si tiro
  }

  closeAlert(): void{
    this.msg ='';}
  }
