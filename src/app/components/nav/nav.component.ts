import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  host: {
    '(document:click)': 'handleClick($event)',
  }
})
export class NavComponent implements OnInit {

  public elementRef;
  private showNav: boolean = true;
  private navPages: any = [
      {"url": "#home", "name": "Home"},
      {"url": "#news", "name": "News"},
      {"url": "#photos", "name": "Photos"},
      {"url": "#videos", "name": "Videos"},
      {"url": "#music", "name": "Music"},
      {"url": "#gigs", "name": "Gigs"},
      {"url": "#contact", "name": "Contact"}
  ];

  constructor(myElement: ElementRef) {
    this.elementRef = myElement;
  }

  handleClick(event){
    var clickedComponent = event.target;
    var inside = false;
    do {
        if (clickedComponent === this.elementRef.nativeElement) {
            inside = true;
        }
        clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if(inside){
        console.log('inside');
    }else{
        console.log('outside');
        this.showNav = true;
    }
  }

  private toggleNav() {
    this.showNav = !this.showNav;
  }

  ngOnInit() {}

}
