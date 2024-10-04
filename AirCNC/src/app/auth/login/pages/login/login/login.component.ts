import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../../const/shared.modules';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router:Router, private userService: UserService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onLogin(){
    console.log(this.loginForm.value)
    if (!this.loginForm.valid) {
      Swal.fire({
        title:'Ingreso',
        text:'Debe diligenciar todos los campos',
        icon:'error'
      });
      return;
    }
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    let response = this.userService.login(email, password);
    if(response.success){
      this.router.navigateByUrl('/home');
    }else{
      Swal.fire({
        title:'Ingreso',
        text:response.message,
        icon:'error'
      });
    }
  }
}
