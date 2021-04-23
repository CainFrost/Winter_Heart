import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { PizzaPageRoutingModule } from './pizza-routing.module';

import { PizzaPage } from './pizza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    PizzaPageRoutingModule
  ],
  declarations: [PizzaPage]
})
export class PizzaPageModule {}
