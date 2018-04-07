import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  items: Array<any> = []

  constructor() {
    this.items = [
      { name: '/assets/images/celtronic-1.jpg' },
      { name: '/assets/images/hoxton-1.jpg' },
      { name: '/assets/images/keyboards-1.jpg' },
      { name: '/assets/images/roddens-1.jpg' },
      { name: '/assets/images/silk-halloween.jpg' },
      { name: '/assets/images/wire-show-1.jpg' },
      { name: '/assets/images/records.jpg' }
    ]
  }

  ngOnInit() {
  }

}
