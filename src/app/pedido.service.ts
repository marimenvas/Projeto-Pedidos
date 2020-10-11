import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  
  constructor(private http:HttpClient) { }

  public list() {
    return [
      {
    "id": 1,
    "productId": 2,
    "mesaid": 2,
    "status_pedido": 1,
    "is_active": true,
    "createdAt": "2020-09-28T17:47:18.511Z",
    "updatedAt": "2020-09-28T18:04:42.485Z"
    },
    {
    "id": 3,
    "productId": 2,
    "mesaid": 2,
    "status_pedido": 1,
    "is_active": true,
    "createdAt": "2020-09-28T17:50:12.524Z",
    "updatedAt": "2020-09-28T17:50:12.524Z"
    },
    {
    "id": 6,
    "productId": 1,
    "mesaid": 2,
    "status_pedido": 1,
    "is_active": true,
    "createdAt": "2020-09-29T12:00:19.425Z",
    "updatedAt": "2020-09-29T12:00:19.425Z"
    }
    ]
  }
}
 
