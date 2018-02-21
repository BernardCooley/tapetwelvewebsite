import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  public bookingForm: FormGroup;
  public inputValue;
  public showValidation = false;
  public emailError: string;
  public firstNameError: string;
  public lastNameError: string;
  public locationError: string;
  public successFailureMessage: string;
  public toggleBookingBoolean: boolean = false;

  constructor(private _formBuilder: FormBuilder) {}

  submitBooking() {
    this.inputValue = this.bookingForm.value;

    console.log(this.inputValue);

    this.successFailureMessage = this.inputValue ? 'Booking enquiry successful' : 'Booking enquiry failed, please try again later or email tapetwelve@gmail.com';

    this.bookingForm.reset();
    this.toggleBookingBoolean = false;
  }

  toggleBooking() {
    this.toggleBookingBoolean = !this.toggleBookingBoolean;
  }

  ngOnInit() {
    this.bookingForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      venueClubnight: [''],
      location: ['', Validators.required],
      date: [''],
      message: [''],
    });

    this.bookingForm.valueChanges.subscribe(data => {
      let email = this.bookingForm.get('email');
      let firstName = this.bookingForm.get('firstName');
      let lastName = this.bookingForm.get('lastName');
      let location = this.bookingForm.get('location');

      if(email.dirty && email.value === '') {
        this.emailError = 'Email address required';
      }else if(email.dirty && email.invalid) {
        this.emailError = 'Email address invalid';
      }else {
        this.emailError = '';
      }
      this.firstNameError = firstName.invalid && firstName.dirty ? 'First name required' : '';
      this.lastNameError = lastName.invalid && lastName.dirty ? 'Last name required' : '';
      this.locationError = location.invalid && location.dirty ? 'Location/City required' : '';
    })
  }

}
