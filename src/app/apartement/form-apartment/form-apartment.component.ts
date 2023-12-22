import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-apartment',
  templateUrl: './form-apartment.component.html',
  styleUrls: ['./form-apartment.component.css']
})
export class FormApartmentComponent implements OnInit {
  apartForm!: FormGroup;
  added: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const residenceId = this.route.snapshot.paramMap.get('id');

    this.apartForm = new FormGroup({
      appartNum: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      floorNum: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      surface: new FormControl('', Validators.required),
      terrace:  new FormControl('', Validators.required),
      surfaceTerrace: new FormControl(''),
      category: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      residence: new FormControl(residenceId)
    });
}

add(){
  if (this.apartForm.valid) {
  this.added=true
  this.apartForm.reset
    console.log(this.apartForm.value);     }
}
}
