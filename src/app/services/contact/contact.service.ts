import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class ContactService {

  public database = firebase.database();
  private recordKey;
  private updates = {};

  constructor(private _http: Http) {}

  getAllDataByCollection(collection): Observable<any> {
    const url: string = 'https://tapetwelvewebsite.firebaseio.com/' + collection + '.json';
    return this._http.get(url)
      .map(res => res.json());
  }

  appendNewData(collection, data) {
    return this.update(collection, data);
  }

  update(collection, data) {
    this.recordKey = this.database.ref().child(collection).push().key;
    this.updates['/' + collection + '/' + this.recordKey] = data;
    return firebase.database().ref().update(this.updates);
  }
}
