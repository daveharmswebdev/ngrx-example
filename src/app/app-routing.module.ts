import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { TodoHomeComponent } from './todo/todo-home/todo-home.component';
import { RandomImageComponent } from './random-image/random-image/random-image.component';
import { PostsHomeComponent } from './posts/posts-home/posts-home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'todo', component: TodoHomeComponent },
  { path: 'random-image', component: RandomImageComponent },
  { path: 'posts', component: PostsHomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
