import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HttpInterceptor,
  HttpHandler,
  HttpHeaders,
  HttpRequest,
  HttpEvent,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class SharedModule {}

@Injectable({ providedIn: 'root' })
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.authService.getLoggedInUserToken();

    const headers = new HttpHeaders({
      Authorization: authToken,
    });
    let authenticatedRequest = req.clone({
      headers: headers,
    });

    return next.handle(authenticatedRequest);
  }
}

export const interceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true,
  },
];
