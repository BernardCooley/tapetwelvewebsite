import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private showNav: boolean = true;
  private navPages: any = [];

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

  private toggleHamburger() {

  }

  private toggleNav() {
    this.showNav = !this.showNav;
  }

  private hideNav() {
    // this.showNav = false;
  }

  ngOnInit() {
  }

}
