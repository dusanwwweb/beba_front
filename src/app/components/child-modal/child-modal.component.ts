import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faCalendarDays as farCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AllergyType } from 'src/app/enums/allergyType.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { ChildService } from 'src/app/service/child.service';
import { SectionService } from 'src/app/service/section.service';


@Component({
  selector: 'app-child-modal',
  templateUrl: './child-modal.component.html',
  styleUrls: ['./child-modal.component.css']
})
export class ChildModalComponent implements OnInit {

  //Enum 
  //allergyList = Object.keys(AllergyType);
  //allergyType: Array<string> = Object.keys(AllergyType).filter(key => isNaN(+key));

  //Font Awesome icon
  farCalendarDays = farCalendarDays;
  
  //Reactive forms
  addForm!: FormGroup;

  //Passing from the parent (section detail component)
  @Input() fromParent: any;

  constructor(
    public activeModal: NgbActiveModal, 
    private childService: ChildService,
    private sectionService: SectionService, 
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
    ) {}
    
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      // weight: [''],
      // sex: [''],
      // allergyType: [''],
      // profilePhoto: [''],
      // updated: [''], 
      // notebook: [''],
      // parents: ['']
    });

    // console.log(this.allergyList); 
  }

  onSubmit(){
    this.sectionService.addChildBySectionId(this.fromParent.id, this.addForm.value).subscribe(data => {
        console.log(this.addForm.value);
        this.router.navigate(['/section', this.fromParent.id]);
      });
  }
}
