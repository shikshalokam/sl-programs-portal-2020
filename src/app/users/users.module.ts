import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { MultiUsersComponent } from './multi-users/multi-users.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
import { SingleUserComponent } from './single-user/single-user.component';

const routes: Routes = [
  {
    path: '', data: { title: 'Home' },
    children: [
      {path: 'user', component: UsersComponent, data: { title: 'users Home' } },
      {path: 'multi', component: MultiUsersComponent, data: { title: 'multiusers' } },
      {path: 'singluser', component: SingleUserComponent}
    ]
  }
];

@NgModule({
  imports: [CommonModule, TabViewModule, ToastModule,
    TableModule,CardModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forChild(routes)],
  declarations: [UsersComponent, MultiUsersComponent, SingleUserComponent],
})
export class UsersModule { }
