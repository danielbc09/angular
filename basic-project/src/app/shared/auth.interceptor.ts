import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      console.log('Intercept!',  req);
      return next.handle(req);
  }
}
