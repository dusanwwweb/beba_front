import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notebook } from 'src/app/models/notebook.model';
import { Post } from 'src/app/models/post.model';
import { NotebookService } from 'src/app/service/notebook.service';
import { Location } from '@angular/common'
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostModalComponent } from '../post-modal/post-modal.component';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
@Component({
  selector: 'app-notebook-detail',
  templateUrl: './notebook-detail.component.html',
  styleUrls: ['./notebook-detail.component.css']
})
export class NotebookDetailComponent implements OnInit {

  posts!: Post[];
  notebook!: Notebook;
  
  constructor(
    private notebookService: NotebookService, 
    private route: ActivatedRoute, 
    private location: Location,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((() => {
      this.getNotebookDetails();
    }))
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
  
  openNoteModal() {
    const notebookId = Number(this.route.snapshot.paramMap.get('id'));
    //SEND THE NOTEBOOK ID !!
    const modalRef = this.modalService.open(PostModalComponent);
  }
  
  // confirmOpen() {
  //   const deleteModal = this.modalService.open(DeleteModalComponent);
  // }

  back(): void {
    this.location.back()
  }

  deletePost(postId: number){

    const notebookId = Number(this.route.snapshot.paramMap.get('id'));
    console.log("Notebook Id " + notebookId);
    
    this.notebookService.removePostFromNotebook(notebookId, postId).subscribe( res =>{
      console.log(res);
      alert('Note supprimée avec success');
    },err => {
      console.log(err);
    });
  }

  editPost(postId: number){}
  
}
