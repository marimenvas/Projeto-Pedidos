import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';


@Component({
  selector: 'app-pedidos-cocina',
  templateUrl: './pedidos-cocina.component.html',
  styleUrls: ['./pedidos-cocina.component.css']
})
export class PedidosCocinaComponent implements OnInit {

  public pedidos;

  constructor(private _service: PedidoService) { }

  ngOnInit(): void {
  }

}
