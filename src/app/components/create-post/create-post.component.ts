import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { NotebookService } from 'src/app/service/notebook.service';
import { Location } from '@angular/common'
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  post: Post = new Post();
  id!: number;

  constructor(
    private notebookService: NotebookService, 
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  savepost(){
    this.notebookService.addPostToNotebook(this.id, this.post).subscribe( data =>{
      console.log(data);
      this.goToPostList();
    },
    error => console.log(error));
  }

  goToPostList(){
    this.router.navigate(['/notebook', this.id]);
  }
  
  onSubmit(){
    console.log(this.id);
    console.log(this.post);
    this.savepost();
  }

  back(): void {
    this.location.back()
  }

}
