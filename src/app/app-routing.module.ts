import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth-login/login/login.component';

import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found/page-not-found.component';

const routes: Routes = [  
  {
    path: 'login', 
    loadChildren: () => import('./pages/auth-login/auth-login.module').then( m => m.AuthLoginModule) 
  },
  {
    path: 'register',
    loadChildren: () => import ('./pages/auth-registro/auth-registro.module').then( m => m.AuthRegistroModule)
  },

  {path: "**", component:PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
