import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/service/post.service';
import { Location } from '@angular/common'
import { Notebook } from 'src/app/models/notebook.model';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  //@Input() notebook!: Notebook;

  id!: number;
  post: Post = new Post();

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.postService.getPostById(this.id).subscribe(data => {
      this.post = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.postService.updatePost(this.id, this.post).subscribe( data =>{
      this.goToPostList();
    }, error => console.log(error));
  }

  goToPostList(){
    // this.router.navigate(['/notebook']);
    // this.router.navigate(['/notebook', this.notebook.id]);
    this.location.back()
  }
  
  back(): void {
    this.location.back()
  }
}
