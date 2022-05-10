import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notebook } from 'src/app/models/notebook.model';
import { Post } from 'src/app/models/post.model';
import { NotebookService } from 'src/app/service/notebook.service';

@Component({
  selector: 'app-notebook-detail',
  templateUrl: './notebook-detail.component.html',
  styleUrls: ['./notebook-detail.component.css']
})
export class NotebookDetailComponent implements OnInit {


  posts!: Post[];
  notebook!: Notebook;
  
  constructor(private notebookService: NotebookService, private route: ActivatedRoute) { }

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


  onNewPost(){
    // APPELLE MODALE
  }

}
