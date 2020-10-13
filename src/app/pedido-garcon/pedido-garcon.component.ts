import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-pedido-garcon',
  templateUrl: './pedido-garcon.component.html',
  styleUrls: ['./pedido-garcon.component.css'],
 
})
export class PedidoGarconComponent implements OnInit {

  constructor(pedidosServ: PedidoService) {
    this.pedidos = pedidosServ.getTodos();
  }

  msg:string = '';

  pedidos: any = [];

  model:any={};
  model2:any={};
  hideUpdate:boolean = true;

  addPedido():void{
    this.pedidos.push(this.model);
    this.msg = 'pedido carregado';
  }
  addGetPedido():void{
  }
  deletePedido(i):void{
    var answer = confirm ('Está seguro que quer deletar?');
    if(answer){
      this.pedidos.splice(i, 1);
      this.msg = 'pedido deletado';
    }
  }

  myValue;
  editPedido(i):void{
    this.hideUpdate = false;
    this.model2.mesaid = this.pedidos[i].mesaid;
    this.model2.id = this.pedidos[i].id;
    this.model2.productId = this.pedidos[i].productId;
    this.myValue = i;
  }

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

  ngOnInit(): void {
  }

  //closeAlert(): void{
   //this.msg = '';}

}
