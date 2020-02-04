import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [MessageService]
})
export class UsersComponent implements OnInit {
  singleuserForm: FormGroup;
  entityForm: FormGroup;
  submitted = false;
  entitysubmitted = false;
  states = [{
    name: 'Andra',
  }, {
    name: 'Karnataka',
  }, {
    name: 'Telanaga',
  }, {
    name: 'Orissia',
  }]
  constructor(private formBuilder: FormBuilder, private messageService: MessageService,
    private router: Router) {

  }

  ngOnInit() {

    this.singleuserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userId: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });

    this.entityForm = this.formBuilder.group({
      state: ['', Validators.required],
      zone: ['', Validators.required],
      hub: ['', [Validators.required]],
      schoolName: ['', Validators.required],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', Validators.required],
    })
  }
  singleuser() {

    this.router.navigate(['/user/singluser']);

  }

  multiuser(){
    this.router.navigate(['/user/multi']);
  }

  handleChange(data) {
    console.log('data clicked', data);
  }

  get f() { return this.singleuserForm.controls; }

  get e() { return this.entityForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.singleuserForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.singleuserForm.value, null, 4));
  }

  onEntitySubmit() {
    this.entitysubmitted = true;
    this.addSingle();
    if (this.entityForm.invalid) {
      return;
    } 
  }

  addSingle() {
    console.log('sadxasd');
    this.messageService.add({ severity: 'error', summary: 'Service Message', detail: 'Via MessageService' });
  }

}
