import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faCalendarDays as farCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AllergyType } from 'src/app/enums/allergyType.enum';
import { Router } from '@angular/router';
import { ChildService } from 'src/app/service/child.service';


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

  constructor(
    public activeModal: NgbActiveModal, 
    private childService: ChildService,
    private formBuilder: FormBuilder,
    private router: Router
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
    // console.log(this.allergyList[0]);    
    // console.log(this.allergyList[1]);    
    // console.log(this.allergyList[2]);   
  }

  onSubmit(){
    this.childService.addChild(this.addForm.value)
      .subscribe(data => {
        console.warn(this.addForm.value);
        this.router.navigate(['children']);
      });
  }


}
