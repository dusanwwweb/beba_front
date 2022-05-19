import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ActivityType } from 'src/app/enums/activityType.enum';
import { Notebook } from 'src/app/models/notebook.model';
import { Post } from 'src/app/models/post.model';
import { NotebookService } from 'src/app/service/notebook.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent implements OnInit{

  //Form
  addPost!: FormGroup;

  post: Post = new Post();
  posts!: Post[];

  id: any;
  // notebook!: Notebook;
  //Enum 
  //activityList = Object.keys(ActivityType);

  constructor(
    public activeModal: NgbActiveModal, 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private postService: PostService,
    private notebookService: NotebookService
  ) {}

  ngOnInit(): void {
    this.addPost = this.formBuilder.group({
      activityType: [''],
      observation: [''],
      startTime: [''],
      endTime: ['']
    })

    // this.route.paramMap.subscribe((() => {
    //   this.onSubmit();
    // }))
    // console.log(this.activityList);
  }
  
  onSubmit(){
    console.log(this.addPost);
    console.warn(this.addPost.value);

    const notebookId = Number(this.route.snapshot.paramMap.get('id'));
    console.log("ID " + notebookId);
    
    this.post.activityType = this.addPost.value.activityType;
    this.post.observation = this.addPost.value.observation;
    this.post.startTime = this.addPost.value.startTime;
    this.post.endTime = this.addPost.value.endTime;

    this.notebookService.addPostToNotebook(1, this.post).subscribe( res => {
        console.log(res);
        //this.getNotebookDetails();
    },err => {
        console.log(err);
    });
  }
}
