import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-pedido-garcon',
  templateUrl: './pedido-garcon.component.html',
  styleUrls: ['./pedido-garcon.component.css'],
 
})
export class PedidoGarconComponent implements OnInit {

  constructor() {}

  pedidos = [
    {
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
      "status_pedido": 1,
    }
  
  ];

  model:any={};

  addPedido():void{
    this.pedidos.push(this.model);
  }
  addGetPedido():void{
  }
  deletePedido():void{
  }
  editPedido():void{
  }
  updatePedido():void{
  }

  ngOnInit(): void {
  }

}
