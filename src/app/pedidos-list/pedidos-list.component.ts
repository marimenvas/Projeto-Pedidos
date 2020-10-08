import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { PedidosCocinaComponent } from '../pedidos-cocina/pedidos-cocina.component';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {

  public pedidos; // pedidos
  constructor(private service:PedidoService) {}

  ngOnInit(): void {
  }

}
