import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'assets/images/arbitros1.jpg'},
      { name: 'assets/images/arbitros2.jpg'},
      { name: 'assets/images/arbitros3.jpg'},
      { name: 'assets/images/arbitros4.jpg'},
      { name: 'assets/images/arbitros5.jpg'},
      { name: 'assets/images/arbitros1.jpg'},
      { name: 'assets/images/arbitros2.jpg'},
      { name: 'assets/images/arbitros3.jpg'},
      { name: 'assets/images/arbitros4.jpg'},
      { name: 'assets/images/arbitros5.jpg'},
    ];
   }
}
