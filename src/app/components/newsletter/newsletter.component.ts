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

  addEmailAddress() {
    this.inputValue = this.newsletterForm.value;
    this._contactService.submitData('newsletter', this.inputValue).subscribe(data => {

      this.successFailureMessage = data.id ? 'Successful. Thank you for signing up' : 'Newsletter signup failed, please try again later.';
      this.newsletterForm.reset();
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
