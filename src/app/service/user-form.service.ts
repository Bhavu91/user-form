import { Injectable } from '@angular/core';
import { FormGroup} from '@angular/forms';

const form = {};

@Injectable({ providedIn: 'root' })
export class UserForm extends FormGroup {
  constructor() {
    super(form);
  }
}


