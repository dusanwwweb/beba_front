import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly url = environment.apiBaseUrl;
  
  constructor(private httpClient: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.url}/api/post`);
  }

  public getPostById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${this.url}/api/post/${id}`);
  }

  public addPost(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(`${this.url}/api/post`, post);
  }

  public updatePost(id: number, post: Post): Observable<Post> {
    return this.httpClient.put<Post>(`${this.url}/api/post/${id}`, post);
  }

  public deletePost(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/api/post/${id}`);
  }
}
