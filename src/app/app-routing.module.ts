import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsIdComponent } from './comments-id/comments-id.component';
import { comments } from './model/comments';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'comments-list', component: CommentsListComponent},
  {path: 'comments-id', component: CommentsIdComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
