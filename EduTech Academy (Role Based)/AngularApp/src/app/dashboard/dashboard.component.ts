import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userRole: any = "";

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole();
  }	 	  	  	 			  	   	 	

  getDashboardTitle(): string {
    switch (this.userRole) {
      case 'student':
        return 'Welcome Student';
      case 'staff':
        return 'Welcome Staff';
      case 'admin':
        return 'Welcome Admin';
      default:
        return 'Dashboard';
    }
  }
}
