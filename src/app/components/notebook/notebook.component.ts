import { Component, Input, OnInit } from '@angular/core';
import { Notebook } from 'src/app/models/notebook.model';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {

  notebook: Notebook = new Notebook();

  constructor() { }

  ngOnInit(): void {
  }

}
