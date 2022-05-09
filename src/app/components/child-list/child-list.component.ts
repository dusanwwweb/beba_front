
import { Component, OnInit } from '@angular/core';
import { Child } from 'src/app/models/child.model';
import { ChildService } from 'src/app/service/child.service';


@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent  {

  children!: Child[];
   
  constructor(private childService: ChildService) { }

  ngOnInit() {
    this.childService.getChildren().subscribe(
      response =>  this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response: Child[]) {
    this.children = response;
    console.log(response);
  }

}
