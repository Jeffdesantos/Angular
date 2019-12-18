import { comments } from './../model/comments';
import { CommentsService } from './../service/comments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  constructor(private CommentsService: CommentsService) { }
 
  //atribuindo array para colocar os comments do JSONPlayceholder
  comments: comments[];

  
  

  //inicia o chamando o FindAll
  ngOnInit() {
    this.findAll()
  }
  

  //chamando o commments do json para converter em objeto
  findAll(){
    this.CommentsService.getAllComments().subscribe((commentsOut: comments[]) =>{
      this.comments = commentsOut;
    })

  
  }
}
