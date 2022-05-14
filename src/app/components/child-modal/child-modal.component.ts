import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-child-modal',
  templateUrl: './child-modal.component.html',
  styleUrls: ['./child-modal.component.css']
})
export class ChildModalComponent implements OnInit {

  @Input() name: any;
  
  constructor(public activeModal: NgbActiveModal) {}
  // constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {}

  ngOnInit(): void {

  }

}
