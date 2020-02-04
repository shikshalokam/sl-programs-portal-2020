import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  {
    path: '', component: LayoutComponent,data: { title: 'Home' },
    children: [
      { path: 'user', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
    ]
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
