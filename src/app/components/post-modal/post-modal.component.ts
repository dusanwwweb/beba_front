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

  postModal!: FormGroup;

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
    this.postModal = new FormGroup({
      activityType: new FormControl(''),
      observation: new FormControl(''),
      startTime: new FormControl(''),
      endTime: new FormControl('')
    });
  }

  onSubmit(){
    console.log(this.postModal.value);
    this.notebookService.addPostToNotebook(this.fromParent.id, this.postModal.value).subscribe((res:any) => {
      console.log('Post updated successfully!');
      this.router.navigate(['/notebook', this.fromParent.id]);
    })
  }
}
