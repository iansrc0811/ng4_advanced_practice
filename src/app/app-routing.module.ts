import { NgModule } from '@angular/core';
import {Route, Routes,  RouterModule} from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const fallbackRoute: Route = {
  path: '**',
  redirectTo: 'page1',
  pathMatch: 'full'
} // 萬用路由}

const routes: Routes = [
  { path: '', component: Page1Component }, // 預設路由
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', redirectTo: 'page1', pathMatch: 'full' }, // 轉向路由
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    // useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
