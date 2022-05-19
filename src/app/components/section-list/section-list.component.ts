import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/models/section.model';
import { SectionService } from 'src/app/service/section.service';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  sections!: Section[];
  
  constructor(private sectionService: SectionService ) { }

  ngOnInit() {
    this.sectionService.getSections().subscribe(
      response =>  this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response: Section[]) {
    this.sections = response;
  }

}
