import { Component, Input, OnInit } from '@angular/core';
import { Notebook } from 'src/app/models/notebook.model';
import { NotebookService } from 'src/app/service/notebook.service';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {

  notebook: Notebook = new Notebook();

  notebooks!: Notebook[];

  constructor(private notebookService: NotebookService) { }

  ngOnInit() {
    this.notebookService.getNotebooks().subscribe(
      response =>  this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response: Notebook[]) {
    this.notebooks = response;
    console.log(response);
  }
}
