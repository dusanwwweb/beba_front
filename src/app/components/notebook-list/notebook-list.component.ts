import { Component, Input, OnInit } from '@angular/core';
import { identity } from 'rxjs';
import { Notebook } from 'src/app/models/notebook.model';
import { Post } from 'src/app/models/post.model';
import { NotebookService } from 'src/app/service/notebook.service';
import { Location } from '@angular/common'
import { faBookBookmark as farBookBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-notebook',
  templateUrl: './notebook-list.component.html',
  styleUrls: ['./notebook-list.component.css']
})
export class NotebookListComponent implements OnInit {

  // Font Awesome Icon
  farBookBookmark = farBookBookmark;

  notebooks!: Notebook[];
  posts!: Post[];

  constructor(private notebookService: NotebookService, private location: Location) { }

  ngOnInit() {
    this.notebookService.getNotebooks().subscribe(
      response =>  this.handleSuccessfulResponse(response),
    );
  }

  getPostsByNotebookId(id: number){
    this.notebookService.getPostsById(id).subscribe(
      response => {this.posts = response}
    )
  }

  handleSuccessfulResponse(response: Notebook[]) {
    this.notebooks = response;
  }

  back(): void {
    this.location.back()
  }
}

