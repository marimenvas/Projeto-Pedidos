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

  constructor() { }

  pedidos: any = [{
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

  ngOnInit(): void {
  }

}
