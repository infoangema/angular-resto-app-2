import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'descripcion-producto',
    loadChildren: () => import('./pages/descripcion-producto/descripcion-producto.module').then( m => m.DescripcionProductoPageModule)
  },
  {
    path: 'llamar-mozo',
    loadChildren: () => import('./pages/llamar-mozo/llamar-mozo.module').then( m => m.LlamarMozoPageModule)
  },
  {
    path: 'confirmar-pedido',
    loadChildren: () => import('./pages/confirmar-pedido/confirmar-pedido.module').then( m => m.ConfirmarPedidoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'boton-confirmar',
    loadChildren: () => import('./pages/boton-confirmar/boton-confirmar.module').then( m => m.BotonConfirmarPageModule)
  },
  {
    path: 'lista-productos',
    loadChildren: () => import('./pages/lista-productos/lista-productos.module').then( m => m.ListaProductosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }