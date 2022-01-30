import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-name-form',
  templateUrl: './user-name-form.component.html',
  styleUrls: ['./user-name-form.component.scss']
})
export class UserNameFormComponent implements OnInit {

  @Input()  userForm: FormGroup;
  constructor() { }

  ngOnInit() {
    if (this.userForm && !this.userForm.get('firstName')) {
      this.userForm.addControl('firstName', new FormControl('', [Validators.required]));
      this.userForm.addControl('lastName', new FormControl('', [Validators.required]));
      this.userForm.addControl('gitHubUsername', new FormControl('', [Validators.required]));
      this.userForm.updateValueAndValidity();
    }
  }

}
