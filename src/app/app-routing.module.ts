import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';


const routes: Routes = [  
  {
    path: "home",
    loadChildren: () => 
    import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth-login/auth-login.module').then( m => m.AuthLoginModule) 
  },
  {
    path: 'register',
    loadChildren: () => import ('./pages/auth-registro/auth-registro.module').then( m => m.AuthRegistroModule)
  },
  {
    path: "**", 
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then( m => m.PageNotFoundModule)
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
