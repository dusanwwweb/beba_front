
import { Component, OnInit } from '@angular/core';
import { Child } from 'src/app/models/child.model';
import { ChildService } from 'src/app/service/child.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit{

  children!: Child[];
  child!: Child;
   
  constructor(private childService: ChildService, private location: Location) { }

  ngOnInit() {
    this.childService.getChildren().subscribe(
      response =>  this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response: Child[]) {
    this.children = response;
    console.log(response);
  }

  // addNewChild(): Child{
  //   return this.childService.addChild(this.child);
  // }

  open(): void {
    
  }

  back(): void {
    this.location.back()
  }
}
