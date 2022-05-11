
import { Component, OnInit } from '@angular/core';
import { Child } from 'src/app/models/child.model';
import { ChildService } from 'src/app/service/child.service';

import * as moment from 'moment';
@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit{

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

  public calculateAge(birthdate: Date): any {
    // let diff = moment(birthdate).diff(moment(), 'milliseconds');
    // let duration = moment.duration(diff).asMonths();
    // // return moment().diff(birthdate, 'year');
    // let months = Math.floor(moment(new Date()).diff(moment(birthdate,"DD/MM/YYYY"),'months',true));
    // return months;
    const date = moment(birthdate, 'DD/MM/YYYY')
    const years = moment().diff(date, 'years')
    const months = moment().diff(date.add(years, 'years'), 'months', false)
    console.log({ years, months });
    
    return { years, months }
    
  }

}
