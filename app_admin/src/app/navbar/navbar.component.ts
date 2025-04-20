import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Manually trigger change detection to re-evaluate isLoggedIn
    this.cdRef.detectChanges();
  }

  public isLoggedIn(): boolean {
    const token = this.authenticationService.getToken();
    console.log('[Navbar] Token:', token);
    const result = this.authenticationService.isLoggedIn();
    console.log('[Navbar] isLoggedIn result:', result);
    return this.authenticationService.isLoggedIn();
  }

  public onLogout(): void {
    this.authenticationService.logout();
    // Optional: force refresh or redirect after logout
    window.location.href = '/';
  }
}
