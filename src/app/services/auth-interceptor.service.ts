import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private authSvc: AuthService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authSvc.getAccessToken();
    const headers = req.headers.set(
      'Authorization',
      `Bearer ${accessToken}`
    );
    const authReq = req.clone({ headers });

    return next.handle(authReq).pipe(
      tap(
        () => {},
        (e: HttpErrorResponse) => {
          console.log(e.message);
        }
      )
    );
  }
}
