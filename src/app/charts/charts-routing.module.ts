import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlotComponent } from 'app/charts/flot/flot.component';

const routes: Routes = [
  // { path: 'charts', // lazy loading 後這些都不需要
  //   children: [
  { path: 'flot', component: FlotComponent }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
