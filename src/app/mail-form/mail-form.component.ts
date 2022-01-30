import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-mail-form',
  templateUrl: './mail-form.component.html',
  styleUrls: ['./mail-form.component.scss']
})
export class MailFormComponent implements OnInit, OnDestroy {

  @Input()  userForm: FormGroup;
  constructor() { }

  ngOnInit() {
    if (this.userForm && !this.userForm.get('email')) {
      this.userForm.addControl('email', new FormControl('', [Validators.required]));
      this.userForm.addControl('acceptTerms', new FormControl(false, [Validators.requiredTrue]));
      this.userForm.updateValueAndValidity();
    }
  }

  ngOnDestroy(): void {
    if (this.userForm.invalid) {
      this.userForm.removeControl('email');
      this.userForm.removeControl('acceptTerms');
    }
  }
}
