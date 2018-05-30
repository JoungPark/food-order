import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant.component';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { MenulistComponent } from './menulist/menulist.component';
import { DatetimeFunction } from '../shared/datetime-function';

const routes:Routes = [
  { path: ':id', component: RestaurantComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DatetimeFunction
  ],
  declarations: [RestaurantComponent, OrderComponent, MenulistComponent]
})
export class RestaurantModule { }
