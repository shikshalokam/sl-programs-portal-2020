import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  field: Subject<any> = new Subject();
  ngOnInit() {
  }

  sidemenu(){
    console.log('sidemenu');
    this.field.next('sunil');
  }
  ToggleState() {
    document.getElementById("toggleSearch").classList.toggle("search-exp");
  }
  ToggleSideMenu() {
    document.getElementById("sidebar").classList.toggle("sidebar-exp");
  }
  ToggleActive() {
    document.getElementById("ham-line").classList.toggle("active")
  }

}
