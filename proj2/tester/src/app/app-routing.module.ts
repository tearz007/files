import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttppracComponent } from './httpprac/httpprac.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'http', component: HttppracComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
