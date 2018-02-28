import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showNav: boolean = true;
  public navPages: any = [];

  constructor() {

    this.navPages = [
      {"url": "home", "name": "Home"},
      {"url": "news", "name": "News"},
      {"url": "photos", "name": "Photos"},
      {"url": "videos", "name": "Videos"},
      {"url": "music", "name": "Music"},
      {"url": "gigs", "name": "Gigs"},
      {"url": "contact", "name": "Contact"}
    ]
  }

  public toggleHamburger() {

  }

  public toggleNav() {
    this.showNav = !this.showNav;
  }

  public hideNav() {
    // this.showNav = false;
  }

  ngOnInit() {
  }

}
