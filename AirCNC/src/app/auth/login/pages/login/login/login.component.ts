import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../../const/shared.modules';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(fb: FormBuilder){

  }

}
