
import { Component, OnInit } from '@angular/core';
import { Child } from 'src/app/models/child.model';
import { ChildService } from 'src/app/service/child.service';
import { Location } from '@angular/common'
import * as moment from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChildModalComponent } from '../child-modal/child-modal.component';
import { AllergyType } from 'src/app/enums/allergyType.enum';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit{

  children!: Child[];
  child!: Child;
  //For Search box
  firstName!: string;
  
  constructor(
    private childService: ChildService, 
    private location: Location,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.childService.getChildren().subscribe(
      response =>  this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response: Child[]) {
    this.children = response;
  }

  open() {
    const modalRef = this.modalService.open(ChildModalComponent);
  }
  
  back(): void {
    this.location.back()
  }

  public calculateAge(birthdate: Date): any {
    const date = moment(birthdate, 'DD/MM/YYYY')
    const years = moment().diff(date, 'years')
    const months = moment().diff(date.add(years, 'years'), 'months', false)
    return `${years} ans et ${months} mois`
  }
}
