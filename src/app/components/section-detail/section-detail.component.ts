import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Child } from 'src/app/models/child.model';
import { Section } from 'src/app/models/section.model';
import { SectionService } from 'src/app/service/section.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-section-detail',
  templateUrl: './section-detail.component.html',
  styleUrls: ['./section-detail.component.css']
})
export class SectionDetailComponent implements OnInit {

  children!: Child[];
  section!: Section;
    
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
}
