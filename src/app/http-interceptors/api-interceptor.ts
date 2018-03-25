import { HttpInterceptor, HttpUserEvent } from "@angular/common/http";
import { HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';

export class ApiInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        const request = req.clone({
            url: req.url+"?wapi_key=901914274ae6f640444717dcac80eace"
        })
        return next.handle(request).do(
            success => console.info("success:" , success),
            error => {
                if(error.status === 401){
                    console.info("NOT AUTHORIZED !!!");    
                }
            }
        );
    }
}
