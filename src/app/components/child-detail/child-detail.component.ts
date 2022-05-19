import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Child } from 'src/app/models/child.model';
import { ChildService } from 'src/app/service/child.service';
import { Location } from '@angular/common'
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ChildModalComponent } from '../child-modal/child-modal.component';
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
    private location: Location,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((() => {
      this.getChildDetails();
    }))
  }

  getChildDetails() {
    const childId = Number(this.route.snapshot.paramMap.get('id'))

    this.childService.getChildById(childId).subscribe(
      response => {this.child = response}
    );
  }

  back(): void {
    this.location.back()
  }
  
  open() {
    // const modalRef = this.modalService.open(ChildModalComponent);
    // modalRef.componentInstance.name = `${this.child.firstName}`;
  }
}