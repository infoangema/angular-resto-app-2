import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotonConfirmarPageRoutingModule } from './boton-confirmar-routing.module';

import { BotonConfirmarPage } from './boton-confirmar.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotonConfirmarPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [BotonConfirmarPage]
})
export class BotonConfirmarPageModule {}
