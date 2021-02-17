import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionProductoPage } from './descripcion-producto.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionProductoPageRoutingModule {}
