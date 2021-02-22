import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotonConfirmarPage } from './boton-confirmar.page';

const routes: Routes = [
  {
    path: '',
    component: BotonConfirmarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotonConfirmarPageRoutingModule {}
