import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserForm} from '../service/user-form.service';

@Component({
  selector: 'app-mail-form',
  templateUrl: './mail-form.component.html',
  styleUrls: ['./mail-form.component.scss']
})
export class MailFormComponent implements OnInit, OnDestroy {

  constructor( public router: Router,
               public userForm: UserForm) { }

  ngOnInit() {
    if (this.userForm && !this.userForm.get('email')) {
      this.userForm.addControl('email', new FormControl('', [Validators.required]));
      this.userForm.addControl('acceptTerms', new FormControl(false, [Validators.requiredTrue]));
      this.userForm.updateValueAndValidity();
    }
    if (this.userForm && !this.userForm.get('firstName')) {
      this.router.navigate(['../home', 'step1']);
    }
  }

  ngOnDestroy(): void {
    if (this.userForm.invalid) {
      this.userForm.removeControl('email');
      this.userForm.removeControl('acceptTerms');
    }
  }

  onSubmit() {
    // @ts-ignore
    if (this.userForm && this.userForm.valid) {
      console.log('userForm:', this.userForm.value);
      this.router.navigate(['../home', this.userForm.get('gitHubUsername').value]);
    }
  }
}
