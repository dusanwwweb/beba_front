import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Notebook } from 'src/app/models/notebook.model';
import { Post } from 'src/app/models/post.model';
import { NotebookService } from 'src/app/service/notebook.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  updatePost!: FormGroup;

  //Passing from the parent (notebook detail component)
  @Input() fromParent: any;

  constructor( 
    public activeModal: NgbActiveModal, 
    private postService: PostService,
    private notebookService: NotebookService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.updatePost = new FormGroup({
      activityType: new FormControl(''),
      observation: new FormControl(''),
      startTime: new FormControl(''),
      endTime: new FormControl('')
    });
  }

  onSubmit(){
    console.log(this.updatePost.value);
    this.notebookService.addPostToNotebook(this.fromParent.id, this.updatePost.value).subscribe((res:any) => {
      console.log('Post updated successfully!');
      this.router.navigate(['/notebook', this.fromParent.id]);
    })
  }
  
}
