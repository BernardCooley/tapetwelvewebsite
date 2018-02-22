import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class ContactService {

  emailAddressCollection: AngularFirestoreCollection<any>;
  emails: Observable<any>;

  constructor(private _afs: AngularFirestore) {}

  getData(): Observable<any> {
    this.emailAddressCollection = this._afs.collection('newsletter');
    this.emails = this.emailAddressCollection.valueChanges();
    return this.emails;
  }

  checkExistingEmail(emailAddress): Observable<any> {
    this.emailAddressCollection = this._afs.collection('newsletter', ref => {
      return ref.where('email', '==', emailAddress.email);
    });
    this.emails = this.emailAddressCollection.valueChanges();
    return this.emails;
  }

  submitData(collection, data) {
    var successFailure: Observable<any>;
    successFailure = Observable.fromPromise(this._afs.collection(collection).add(data));
    return successFailure;
  }

}
