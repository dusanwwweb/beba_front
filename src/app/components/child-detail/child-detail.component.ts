import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Child } from 'src/app/models/child.model';
import { ChildService } from 'src/app/service/child.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-child-detail',
  templateUrl: './child-detail.component.html',
  styleUrls: ['./child-detail.component.css']
})
export class ChildDetailComponent implements OnInit {

  child!: Child; 
  children!: Child[];
  
  constructor(
    private childService: ChildService,
    private route: ActivatedRoute,
    private location: Location 
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((() => {
      this.getChildDetails();
    }))
  }

  getChildDetails() {
    const childId = Number(this.route.snapshot.paramMap.get('id'))

    this.childService.geChildById(childId).subscribe(
      response => {this.child = response}
    );
  }

  back(): void {
    this.location.back()
  }
  
}
