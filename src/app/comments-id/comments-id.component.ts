import { comments } from './../model/comments';
import { CommentsService } from './../service/comments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-id',
  templateUrl: './comments-id.component.html',
  styleUrls: ['./comments-id.component.css']
})
export class CommentsIdComponent implements OnInit {

  constructor(private CommentsService: CommentsService) { }

  //Declarando o ID como number e o comments ID na estrutura Constructor
  id: number;
  commentsId: comments = new comments(0,0,'','','')

  ngOnInit() {
  }

  //Transforma o JSON em objeto
  seachClick(){
    this.CommentsService.getById(this.id).subscribe((commentsOut: comments)=>{
      this.commentsId = commentsOut;
    })
    }

}
