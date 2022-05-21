import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/service/post.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  post: Post = new Post();

  constructor(
    private postService: PostService,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  savepost(){
    this.postService.addPost(this.post).subscribe( data =>{
      console.log(data);
      this.goToPostList();
    },
    error => console.log(error));
  }

  goToPostList(){
    //this.router.navigate(['/notebook']);
    this.location.back()
    // this.router.navigate(['/notebook', this.post.id]);
  }
  
  onSubmit(){
    console.log(this.post);
    this.savepost();
  }

}
