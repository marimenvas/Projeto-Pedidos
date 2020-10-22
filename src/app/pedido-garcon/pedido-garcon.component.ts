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

  deletePedido(id):void{
      this.pedidoServ.deletePedidos(id)
      .subscribe({ 
        next: (resposta)=> {
          alert('Pedido deletado com sucesso')
          this.pedidoServ.getPedidos().subscribe(pedidos=> {//para fazer refresh
            this.pedidos = pedidos
          });
        },
      })
      
    
  }

  editPedido(dadosPedido):void{// para fazer mudanças no angular não faz enviou para a API
    this.hideUpdate = false;
    this.model2.mesaid = dadosPedido.mesaid;
    this.model2.id = dadosPedido.id;
    this.model2.productId = dadosPedido.productId;
    this.myValue = dadosPedido;
  }

  updatePedido():void{ // para fazer mudanças no angular não faz enviou para a API
    this.pedidoServ.editPedidos(this.model2)
      .subscribe({ 
        next: (resposta)=> {
          alert('Pedido editado com sucesso')
          this.pedidoServ.getPedidos().subscribe(pedidos=> {//para fazer refresh
            this.pedidos = pedidos
          });
        },
      })
  }

  ngOnInit(): void {// da erro si tiro
  }

  closeAlert(): void{
    this.msg ='';}
  }
