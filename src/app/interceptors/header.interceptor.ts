import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const clonedRequest = req.clone({
			headers: new HttpHeaders({
				"Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
			})
		});
		return next.handle(clonedRequest);
	}
}
