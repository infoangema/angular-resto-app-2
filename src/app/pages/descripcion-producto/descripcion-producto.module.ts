import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionProductoPageRoutingModule } from './descripcion-producto-routing.module';

import { DescripcionProductoPage } from './descripcion-producto.page';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionProductoPageRoutingModule,
    ComponentsModule,


  ],
  declarations: [DescripcionProductoPage]
})
export class DescripcionProductoPageModule {}
