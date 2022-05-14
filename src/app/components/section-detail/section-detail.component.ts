import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Child } from 'src/app/models/child.model';
import { Section } from 'src/app/models/section.model';
import { SectionService } from 'src/app/service/section.service';
import { Location } from '@angular/common'
import * as moment from 'moment';

@Component({
  selector: 'app-section-detail',
  templateUrl: './section-detail.component.html',
  styleUrls: ['./section-detail.component.css']
})
export class SectionDetailComponent implements OnInit {

  children!: Child[];
  section!: Section;
  firstName!: string;

  constructor(
    private sectionService: SectionService, 
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((() => {
      this.getSectionDetails();
    }))
  }

  getSectionDetails() {
    const sectionId = Number(this.route.snapshot.paramMap.get('id'));

    this.sectionService.getSectionById(sectionId).subscribe( 
      response => {this.section = response}
    )

    this.sectionService.getChildrenBySectionId(sectionId).subscribe( 
      response => {this.children = response}
    )
  }

  back(): void {
    this.location.back()
  }

  public calculateAge(birthdate: Date): any {
    const date = moment(birthdate, 'DD/MM/YYYY')
    const years = moment().diff(date, 'years')
    const months = moment().diff(date.add(years, 'years'), 'months', false)
    console.log({ years, months });
    return `${years} ans et ${months} mois`
  }
}
