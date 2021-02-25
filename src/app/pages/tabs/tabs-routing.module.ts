import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { InicioPageModule } from '../inicio/inicio.module';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'menu',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path:'mozo',
        loadChildren: () => import('../llamar-mozo/llamar-mozo.module').then(m => m.LlamarMozoPageModule)
      },
      {
        path:'confirmar',
        loadChildren: () => import('../boton-confirmar/boton-confirmar.module').then(m => m.BotonConfirmarPageModule)
      },
      {
        path:'carrito',
        loadChildren: () => import('../lista-productos/lista-productos.module').then(m => m.ListaProductosPageModule)
      }
    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,],
})
export class TabsPageRoutingModule {}
