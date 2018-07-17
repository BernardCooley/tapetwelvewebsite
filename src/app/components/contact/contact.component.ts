import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact/contact.service';
import { SlideInOutAnimation } from '../../animations/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [SlideInOutAnimation]
})
export class ContactComponent implements OnInit {

  animationState = 'out';

  public contactForm: FormGroup;
  public inputValue;
  public showValidation = false;
  public emailError: string;
  public firstNameError: string;
  public lastNameError: string;
  public successFailureMessage: string;
  public toggleContactBoolean: boolean = false;

  constructor(private _formBuilder: FormBuilder, private _contactService: ContactService) { }

  submitMessage() {
    this.inputValue = this.contactForm.value;
    this._contactService.submitData('contactMessages', this.inputValue).subscribe(data => {
      if(data.id) {
        this.successFailureMessage = 'Successful. Thank you for your enquiry. We will get back to you as soon as possible.';
        this.contactForm.reset();
        this.animationState = 'out';
      }else {
        this.successFailureMessage = 'Submission failed, please try again later or contact tapetwelve@gmail.com directly.';
      }
    });
  }

  toggleContact(divName: string) {
    if (divName === 'contactDiv') {
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
    }
  }

  ngOnInit() {
    this.contactForm = this._formBuilder.group({
      email: ['', [Validators.email]],
      firstName: [''],
      lastName: [''],
      message: [''],
    });

    this.contactForm.valueChanges.subscribe(data => {
      let email = this.contactForm.get('email');

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
