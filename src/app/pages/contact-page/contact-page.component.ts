import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  public newsletterForm: FormGroup;
  public inputValue; 
  public showValidation = false;

  constructor(private _formBuilder: FormBuilder) {
    this.newsletterForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  newsletterSignup() {
    this.inputValue = this.newsletterForm.value;

    console.log(this.inputValue);
  }

  checkValidation() {
    this.inputValue = this.newsletterForm.value;
    
    this.showValidation = this.inputValue.email ? true : false;
  }

  ngOnInit() {
  }

}
