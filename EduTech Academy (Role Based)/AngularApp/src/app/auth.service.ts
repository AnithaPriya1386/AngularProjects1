import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userRole: string | null = null;

  constructor( private router: Router) {}

  login(role: string) {
    this.userRole = role;
    
    this.router.navigateByUrl("/dashboard");
  }

  logout() {
    this.userRole = null;
    this.router.navigate(['']);
  }

  getUserRole() {
    return this.userRole;
  }
}