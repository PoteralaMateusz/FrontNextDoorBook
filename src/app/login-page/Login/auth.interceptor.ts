import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {TokenStorageService} from "./token-storage.service";
import {catchError, Observable, throwError} from "rxjs";
import {EventData} from "./EventData";
import {EvenBusService} from "./even-bus.service";

const TOKEN_HEADER_KEY = "Authorization";
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  private isRefreshing = false;

  constructor(private storageService: TokenStorageService, private eventBusService: EvenBusService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      withCredentials: true,
    });

    return next.handle(req).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          !req.url.includes('auth/signin') &&
          error.status === 401
        ) {
          return this.handle401Error(req, next);
        }

        return throwError(() => error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      if (this.storageService.isLoggedIn()) {
        this.eventBusService.emit(new EventData('logout', null));
      }
    }

    return next.handle(request);
  }
}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
]
