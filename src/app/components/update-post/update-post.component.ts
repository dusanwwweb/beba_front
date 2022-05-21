import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/models/post.model';
import { NotebookService } from 'src/app/service/notebook.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  id!: number;
  post!: Post;
  updatePost!: FormGroup;

  constructor( 
    public activeModal: NgbActiveModal, 
    private postService: PostService,
    private notebookService: NotebookService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    console.log("ID " + this.id);
    this.postService.getPostById(this.id).subscribe((data: Post)=>{
      this.post = data;
    }); 
       
    this.updatePost = new FormGroup({
      activityType: new FormControl(''),
      observation: new FormControl(''),
      startTime: new FormControl(''),
      endTime: new FormControl('')
    });
  }

  onSubmit(){
    console.log(this.updatePost.value);
    //id u parmetru je id notebook
    this.notebookService.addPostToNotebook(this.id, this.updatePost.value).subscribe((res:any) => {
      console.log('Post updated successfully!');
      this.router.navigateByUrl('notebook/}');
    })
  }

}
