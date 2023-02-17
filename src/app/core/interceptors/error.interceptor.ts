import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}
//TODO: lanzar alerta
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        //TODO: Iniciar STATE ALERT
        return throwError(error);
      })
    );
  }
  

}
