import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { CarComponent } from './component/car/car.component';
import { CarDetailsComponent } from './component/car-details/car-details.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'menu', component: MenuComponent},
  { path: 'cars', component: CarComponent },
  { path: 'car_details', component: CarDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
