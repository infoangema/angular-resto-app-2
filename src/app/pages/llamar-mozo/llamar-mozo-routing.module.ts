import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LlamarMozoPage } from './llamar-mozo.page';

const routes: Routes = [
  {
    path: '',
    component: LlamarMozoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LlamarMozoPageRoutingModule {}
