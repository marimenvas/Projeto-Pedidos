import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-pedido-garcon',
  templateUrl: './pedido-garcon.component.html',
  styleUrls: ['./pedido-garcon.component.css']
})
export class PedidoGarconComponent implements OnInit {

  constructor(pedido: PedidoService) {}

  ngOnInit(): void {
  }

}
