import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = false;

  constructor(
    public oidcSvc: OidcSecurityService,
  ) { }

  login() {
    this.oidcSvc.authorize();
  }

  logout() {
    this.oidcSvc.logoff();
  }

  checkAuth() {
    this.oidcSvc.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken }) => {
      console.log('is authenticated: ', isAuthenticated);
      console.log('user data: ', userData);
      console.log('access token: ', accessToken);
      console.log('id token: ', idToken);

      this.isAuthenticated = isAuthenticated;
    });
  }

  getAccessToken() {
    return this.oidcSvc.getAccessToken();
  }
}
