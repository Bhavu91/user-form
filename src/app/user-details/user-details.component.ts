import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserForm} from '../service/user-form.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: any = {};
  userFormContent: any = {};
  constructor(private activatedRoute: ActivatedRoute,
              private userForm: UserForm) { }

  ngOnInit() {
    this.userFormContent = this.userForm.value;
    this.activatedRoute.data.subscribe(routeData => {
      if (routeData && routeData.userDetails) {
        this.user = {...routeData.userDetails};
      }
    });
  }

}
