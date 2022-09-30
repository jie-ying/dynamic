import { Component, OnInit } from '@angular/core';

interface Gender{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gender: Gender[] = [
    {value: 'f', viewValue: 'Female'},
    {value: 'm', viewValue: 'Male'}
  ]

}
