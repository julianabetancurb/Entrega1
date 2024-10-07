import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORTS } from '../../../../../const/shared.modules';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  signUpForm!: FormGroup


  constructor(private fb: FormBuilder, private router: Router, private userService:UserService) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: [''],
      userName:['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      password:['', [Validators.required]],
      rePassword: [''],
      rol:['']
    });
  }


  onRegister() {
    console.log(this.signUpForm.value);
    if (!this.signUpForm.valid) {
      Swal.fire({
        text:'Debe diligenciar todos los campos',
        icon:'error'
      })
      return;
    }
    let id = this.generateId();
    let userName = this.signUpForm.value.userName || '';
    let email = this.signUpForm.value.email || '';
    let password = this.signUpForm.value.password || '';
    let rePassword = this.signUpForm.value.rePassword || '';
    let rol = this.signUpForm.value.rol || '';
    if (rePassword !== password) {
      Swal.fire({
        text:'Las constraseñas no coinciden',
        icon:'error'
      })
      return;
    }


    let response = this.userService.register({
      userName, password, email,
      rol: rol,
      id: id
    })
    if(response.success){
      this.router.navigateByUrl('/home');
    }else{
      Swal.fire({
        text:response.message,
        icon:'error'
      })
    }

  }

  generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

}


