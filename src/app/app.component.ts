import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Program-Portal';
  currentuser: any;
  items: any[];
  field: Subject<any> = new Subject();
  ngOnInit() {
    this.items = [
      {
        label: 'File',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ]
        },
        { label: 'Open' },
        { label: 'Quit' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      }
    ];
  }

  sidemenu(data) {
    console.log('aappppppppppp', data);

  }

  openmenu(){
    this.currentuser = true;
    this.field.next('ajay');
  }
}
