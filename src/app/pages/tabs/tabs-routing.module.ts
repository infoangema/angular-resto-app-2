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
      }
    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
