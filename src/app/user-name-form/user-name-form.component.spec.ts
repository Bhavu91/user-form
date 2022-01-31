import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {UserNameFormComponent} from './user-name-form.component';
import {UserForm} from '../service/user-form.service';
import {BrowserTestingModule} from '@angular/platform-browser/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatStepperModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('UserNameDetailsComponent', () => {
  let component: UserNameFormComponent;
  let fixture: ComponentFixture<UserNameFormComponent>;
  // tslint:disable:prefer-const
  let userForm: UserForm;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserNameFormComponent],
      imports: [
        BrowserTestingModule,
        RouterTestingModule,
        NoopAnimationsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatButtonModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatCardModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNameFormComponent);
    component = fixture.componentInstance;
    TestBed.overrideProvider(UserForm, {useValue: userForm});
    component.userForm = new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create userForm with default user name values', () => {
    expect(component).toBeTruthy();
    expect(component.userForm).toBeTruthy();
    expect(component.userForm.get('firstName')).toBeTruthy();
  });

  it('should render user name details in a header tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('User Details');
  });

});
