import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  public newsletterForm: FormGroup;
  public inputValue;
  public emailError: string;
  public successFailureMessage: string;

  constructor(private _formBuilder: FormBuilder) {}

  newsletterSignup() {
    this.inputValue = this.newsletterForm.value;

    console.log(this.inputValue);

    this.successFailureMessage = this.inputValue ? 'Newsletter signup successful' : 'Newsletter signup failed, please try again later or email tapetwelve@gmail.com';

    this.newsletterForm.reset();
  }

  ngOnInit() {
    this.newsletterForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.newsletterForm.valueChanges.subscribe(data => {

      let email = this.newsletterForm.get('email');

      if(email.dirty && email.value === '') {
        this.emailError = 'Email address required';
      }else if(email.dirty && email.invalid) {
        this.emailError = 'Email address invalid';
      }else {
        this.emailError = '';
      }
    })
  }

}
