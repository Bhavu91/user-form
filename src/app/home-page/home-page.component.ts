import {Component} from '@angular/core';
import {UserForm} from '../service/user-form.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(public userForm: UserForm) {
    this.userForm.reset();
  }
}
