import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ActivityType } from 'src/app/enums/activityType.enum';
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
  formPost!: FormGroup;

  post: Post = new Post();

  //Enum 
  //activityList = Object.keys(ActivityType);

  constructor(
    public activeModal: NgbActiveModal, 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {

    this.formPost = this.formBuilder.group({
      id: [],
      activityType: [''],
      observation: [''],
      startTime: [''],
      endTime: ['']
    })

    // this.formPost = new FormGroup({
    //   activityType: new FormControl(''),
    //   observation: new FormControl(''),
    //   startTime: new FormControl(''),
    //   endTime: new FormControl('')
    // });
    
    // console.log(this.activityList);

    // closeModal(sendData) {
    //   this.activeModal.close(sendData);
    // }
  }
  
  onSubmit(){
    console.warn(this.formPost.value);
    
    this.postService.addPost(this.formPost.value).
    subscribe(( res: any) => {
      console.log('Post created successfully!');
      //this.route.parent;
    });
  }
}
