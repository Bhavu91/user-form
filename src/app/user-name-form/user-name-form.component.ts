import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserForm} from '../service/user-form.service';

@Component({
  selector: 'app-user-name-form',
  templateUrl: './user-name-form.component.html',
  styleUrls: ['./user-name-form.component.scss']
})
export class UserNameFormComponent implements OnInit {

  constructor(public userForm: UserForm) { }

  ngOnInit() {
    if (this.userForm && !this.userForm.get('firstName')) {
      this.userForm.addControl('firstName', new FormControl('', [Validators.required]));
      this.userForm.addControl('lastName', new FormControl('', [Validators.required]));
      this.userForm.addControl('gitHubUsername', new FormControl('', [Validators.required]));
      this.userForm.updateValueAndValidity();
    }
  }
}
