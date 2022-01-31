import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MailFormComponent} from './mail-form.component';
import {UserForm} from '../service/user-form.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {BrowserTestingModule} from '@angular/platform-browser/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatStepperModule} from '@angular/material';
import {Router} from '@angular/router';

describe('MailDetailsComponent', () => {
  let component: MailFormComponent;
  let fixture: ComponentFixture<MailFormComponent>;
  // tslint:disable:prefer-const
  let userForm: UserForm;
  let testRouter = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MailFormComponent],
      imports: [
        BrowserTestingModule,
        RouterTestingModule.withRoutes(
          [{path: 'home/step1', component: MailFormComponent}]
        ),
        BrowserAnimationsModule,
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
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailFormComponent);
    component = fixture.componentInstance;
    TestBed.overrideProvider(UserForm, {useValue: userForm});
    TestBed.overrideProvider(Router, {useValue: testRouter});
    component.userForm = new FormGroup({});
    component.userForm.addControl('firstName', new FormControl('Bhavani', [Validators.required]));
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create userForm with default mail values', () => {

    expect(component.userForm).toBeTruthy();
    expect(component.userForm.get('email')).toBeTruthy();
    expect(component.userForm.get('acceptTerms').value).toBeFalsy();
  });

  it('should render user mail details in a header tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Mail Details');
  });

});
