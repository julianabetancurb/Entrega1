import { Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { LoginResponse, SignUpResponse } from '../interfaces/login-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSignal = signal<User>({
    userName: '', password: '', email: '',
    rol: ''
  });

  login(email:string, password:string) :LoginResponse{
      const userStr = localStorage.getItem(email.toLowerCase().trim());
      if(!userStr){
        return{
          success: false,
          message: 'Correo o contraseña incorrectos'
        }
      }
      const user:User = JSON.parse(userStr);
      if(user.password !== password){
        return{
          success: false,
          message: 'Correo o contraseña incorrectos'
        }
      }
      this.setUser(user);
      return{
        success: true
      }
   }

   logout(){
    localStorage.removeItem('loggedUser');
    this.userSignal.set({
      userName: '', password: '', email: '',
      rol: ''
    });
  }

   private setUser(user:User){
    localStorage.setItem('loggedUser', JSON.stringify(user));
    this.userSignal.set(user);
  }

  register(user:User): SignUpResponse{
    if (localStorage.getItem(user.email.toLowerCase().trim())) {
      return {
        success: false,
        message: 'Usuario ya existe'
      }
    }
    const userSrt = JSON.stringify(user);
    localStorage.setItem(user.email.toLowerCase().trim(), userSrt);
    this.setUser(user);
    return {
      success: true
    }
  }

}
