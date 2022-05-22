import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notebook } from 'src/app/models/notebook.model';
import { Post } from 'src/app/models/post.model';
import { NotebookService } from 'src/app/service/notebook.service';
import { Location } from '@angular/common'
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostModalComponent } from '../post-modal/post-modal.component';
import { PostService } from 'src/app/service/post.service';
import { UpdatePostComponent } from '../update-post/update-post.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivityType } from 'src/app/enums/activityType.enum';
@Component({
  selector: 'app-notebook-detail',
  templateUrl: './notebook-detail.component.html',
  styleUrls: ['./notebook-detail.component.css']
})
export class NotebookDetailComponent implements OnInit {

  posts!: Post[];
  notebook!: Notebook;

  //Enum 
  activityList = Object.values(ActivityType);
  activityType: Array<string> = Object.values(ActivityType).filter(value => isNaN(+value));
  
  constructor(
    private notebookService: NotebookService, 
    private postService: PostService,
    private route: ActivatedRoute, 
    private router: Router,
    private location: Location,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((() => {
      this.getNotebookDetails();
    }))

    console.log(this.activityList);
    
  }

  getNotebookDetails() {
    const notebookId = Number(this.route.snapshot.paramMap.get('id'));

    this.notebookService.getNotebookById(notebookId).subscribe( 
      response => {this.notebook = response}
    )

    this.notebookService.getPostsById(notebookId).subscribe( 
      response => {this.posts = response}
    )
  }

  openPostModal() {
    const modalRef = this.modalService.open(PostModalComponent,
      {
        scrollable: true,
        //windowClass: 'myCustomModalClass',
        // keyboard: false,
        // backdrop: 'static'
      });

    let data = {
      id: Number(this.route.snapshot.paramMap.get('id')),
    }

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {});
  }

  back(): void {
    this.location.back()
  }

  deletePost(postId:number){
    this.postService.deletePost(postId).subscribe( response => {
      this.posts = this.posts.filter(item => item.id !== postId);
      alert('Note supprimée avec success');
    }, err => {
      console.log(err);
    });
  }

  updatePost(id: number){
    this.router.navigate(['post', id]);
  }
  
}

