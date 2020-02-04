import { Component, Input, Output, EventEmitter, AfterContentChecked, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuItem } from 'primeng/primeng';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() user: any;
  visibleSidebar1 = true;
  @Output() clicking = new EventEmitter();
  @Input() field: Subject<any>;
  items: any[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'File',
          icon: 'pi pi-pw pi-file',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'User', icon: 'pi pi-fw pi-user-plus'},
                      {label: 'Filter', icon: 'pi pi-fw pi-filter'}
                  ]
              },
              {label: 'Open', icon: 'pi pi-fw pi-external-link'},
              {separator: true},
              {label: 'Quit', icon: 'pi pi-fw pi-times'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
          label: 'Help',
          icon: 'pi pi-fw pi-question',
          items: [
              {
                  label: 'Contents',
                  icon: 'pi pi-pi pi-bars'
              },
              {
                  label: 'Search', 
                  icon: 'pi pi-pi pi-search', 
                  items: [
                      {
                          label: 'Text', 
                          items: [
                              {
                                  label: 'Workspace'
                              }
                          ]
                      },
                      {
                          label: 'User',
                          icon: 'pi pi-fw pi-file',
                      }
              ]}
          ]
      },
      {
          label: 'Actions',
          icon: 'pi pi-fw pi-cog',
          items: [
              {
                  label: 'Edit',
                  icon: 'pi pi-fw pi-pencil',
                  items: [
                      {label: 'Save', icon: 'pi pi-fw pi-save'},
                      {label: 'Update', icon: 'pi pi-fw pi-save'},
                  ]
              },
              {
                  label: 'Other',
                  icon: 'pi pi-fw pi-tags',
                  items: [
                      {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                  ]
              }
          ]
      }
  ];
  }

  passdata() {
    this.clicking.emit('srikanth');
  }
  ngOnChanges() {
    // console.log('ngOnChanges', this.field);
    // this.visibleSidebar1 = this.user;
    if (this.visibleSidebar1) {
      this.visibleSidebar1 = true;
    } else {
      this.visibleSidebar1 = false;
    }
    // this.visibleSidebar1 ? false: true
  }

  ngAfterViewInit() {
    // console.log('user', this.user);
    // 

  }
  ngAfterContentChecked() {

  }
  ngDoCheck() {

  }
  ngAfterViewChecked() {

  }

}
