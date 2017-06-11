import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';

const fallbackRoute: Route = {
  path: '**',
  redirectTo: 'dashboard',
  pathMatch: 'full'
} // 萬用路由}

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards/:type', component: CardsComponent, canActivate: [LoginGuard] },
      {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    preloadingStrategy: PreloadAllModules
    // useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
