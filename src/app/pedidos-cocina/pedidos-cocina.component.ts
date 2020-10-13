import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PedidoService } from '../pedido.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pedidos-cocina',
  templateUrl: './pedidos-cocina.component.html',
  styleUrls: ['./pedidos-cocina.component.css']
})
export class PedidosCocinaComponent implements OnInit {

  constructor(pedidosServ: PedidoService) { 
    this.pedidos = pedidosServ.getTodos();
  }

  pedidos: any = [];

  ngOnInit(): void {
  }

}
