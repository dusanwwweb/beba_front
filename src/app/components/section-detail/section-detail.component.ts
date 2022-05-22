import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Child } from 'src/app/models/child.model';
import { Section } from 'src/app/models/section.model';
import { SectionService } from 'src/app/service/section.service';
import { Location } from '@angular/common'
import * as moment from 'moment';
import { ChildModalComponent } from '../child-modal/child-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    private location: Location,
    private modalService: NgbModal
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

  open(){
    const modalRef = this.modalService.open(ChildModalComponent,
      {
        scrollable: true
      });

    let data = {
      id: Number(this.route.snapshot.paramMap.get('id')),
    }

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then((result) => {
      console.log(result);
    }, (_reason) => {});
  }

  public calculateAge(birthdate: Date): any {
    const date = moment(birthdate, 'DD/MM/YYYY')
    const years = moment().diff(date, 'years')
    const months = moment().diff(date.add(years, 'years'), 'months', false)
    return `${years} ans et ${months} mois`
  }
}
