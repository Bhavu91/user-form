import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  step = 0;
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
    this.userForm = this.formBuilder.group({});
  }

  ngOnInit() {
  }

  navigateBack() {
    this.step -= 1;
  }

  navigateFurther() {
    this.step += 1;
  }

  onSubmit() {
    // @ts-ignore
    if (this.userForm && this.userForm.valid) {
      console.log('userForm:', this.userForm.value);
      this.router.navigate(['home', this.userForm.get('gitHubUsername').value]);
    }
  }
}
