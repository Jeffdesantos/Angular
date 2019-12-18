import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }
  getAllComments(){
    return this.http.get("https://jsonplaceholder.typicode.com/comments")
  }

  // getAllPosts(){
  //   return this.http.get("https://jsonplaceholder.typicode.com/posts")
  // }

  // getAllUsers(){
  //   return this.http.get("https://jsonplaceholder.typicode.com/users")
  // }

  getById(id:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
  }
}
