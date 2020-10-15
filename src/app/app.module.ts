import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './app.routing';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PedidoGarconComponent } from './pedido-garcon/pedido-garcon.component';
import { PedidosCocinaComponent } from './pedidos-cocina/pedidos-cocina.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PedidosListComponent } from './pedidos-list/pedidos-list.component';
import { PedidoService } from './pedido.service';
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    PedidoGarconComponent,
    PedidosCocinaComponent,
    HeaderComponent,
    FooterComponent,
    PedidosListComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    BrowserModule,

  ],
  providers: [PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
