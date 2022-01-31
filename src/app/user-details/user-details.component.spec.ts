import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatStepperModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserTestingModule} from '@angular/platform-browser/testing';
import {UserForm} from '../service/user-form.service';
import {of} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  // tslint:disable:prefer-const
  let userForm: UserForm;
  const FIRSTNAME = 'bhavani';
  const DUMMY_USER: any = {
    avatar_url: 'https://avatars.githubusercontent.com/u/45655273?v=4',
    company: 'abc',
    created_at: '2018-12-06T09:19:29Z',
    email: null,
    followers: 0,
    following: 0,
    id: 45655273,
    location: null,
    login: 'bhavu91',
    name: 'Bhavani',
    public_gists: 0,
    public_repos: 6,
    repos_url: 'https://api.github.com/users/Bhavu91/repos',
    site_admin: false,
    starred_url: 'https://api.github.com/users/Bhavu91/starred{/owner}{/repo}',
    type: 'User',
    updated_at: '2021-04-20T04:47:32Z'
  };
  const fakeActivatedRoute = {
    data: of({userDetails: DUMMY_USER})
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      imports: [
        BrowserTestingModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatButtonModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatCardModule
      ],
      providers: [
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    TestBed.overrideProvider(UserForm,   {useValue: userForm});
    component.userForm = new FormGroup({});
    component.userForm.addControl('firstName', new FormControl(FIRSTNAME, [Validators.required]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with user data loaded', () => {
    expect(component.user).toBeTruthy();
    expect(component.user.login).toEqual('bhavu91');
    expect(component.userFormContent.firstName).toEqual(FIRSTNAME);
  });

});
