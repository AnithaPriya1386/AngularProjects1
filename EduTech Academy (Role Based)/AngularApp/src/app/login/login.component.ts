import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  selectedRole: string = ''; 

  constructor(public authService: AuthService, private formBuilder: FormBuilder) {
  this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      
    });
  }

   login() {
    
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;     

      
      if (username === 'student' && password === 'student') {
        this.selectedRole='student';
        this.authService.login(this.selectedRole);
      } 
      else if(username === 'staff' && password === 'staff'){
        this.selectedRole='staff';
        this.authService.login(this.selectedRole);
      } 
      else if(username === 'admin' && password === 'admin'){	 	  	      	  	  			  	 	
        this.selectedRole='admin';
        this.authService.login(this.selectedRole);
      }       
      else {
        alert('Invalid username or password');
      }
    }
  }
}
