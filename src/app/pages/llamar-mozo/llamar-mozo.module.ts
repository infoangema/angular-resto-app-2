import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LlamarMozoPageRoutingModule } from './llamar-mozo-routing.module';

import { LlamarMozoPage } from './llamar-mozo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LlamarMozoPageRoutingModule
  ],
  declarations: [LlamarMozoPage]
})
export class LlamarMozoPageModule {}
