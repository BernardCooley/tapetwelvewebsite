import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact/contact.service';

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
  

  constructor(private _formBuilder: FormBuilder, private _contactService: ContactService) {
    this.successFailureMessage = '';
  }

  newsletterSignup() {
    let successFailure: Boolean;
    let successFailureMessage: string;
    this.inputValue = this.newsletterForm.value;

    // console.log(this._contactService.appendNewData('emails', this.inputValue.email));

    this._contactService.appendNewData('emails', this.inputValue.email).then(successCallback);

    function successCallback(response){
      successFailure = true;
      
      if(successFailure) {
        return true;
        // this.successFailureMessage = 'Newsletter signup successful';
        // this.newsletterForm.reset();
        // console.log('success');
      }else {
        return false;
        // this.successFailureMessage = 'Newsletter signup failed, please try again later or email tapetwelve@gmail.com';
        // console.log('fail');
      }
    }
    
    // this.successFailureMessage = successFailure ? 'Newsletter signup successful' : 'Newsletter signup failed, please try again later or email tapetwelve@gmail.com';

    // if(successFailure) {
    //   this.newsletterForm.reset();
    // }
  }

  getEmailAddresses() {
    this._contactService.getAllDataByCollection('emails').subscribe(emailAddresses => {
      console.log(emailAddresses);
    });
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
