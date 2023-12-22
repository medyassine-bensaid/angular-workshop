import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  
  loginForm !:FormGroup


  ngOnInit() {
    this.loginForm = new FormGroup({
      login : new FormControl('', [Validators.required, Validators.minLength(4)]),
      password : new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

}

