import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators"
import { AbstractCentralMessage } from "./abstract-cental-message";
import { MessageType } from "./central-message.types";
import { SuccessStatuses } from "../configs/code.statuses";

@Injectable()
export class ApiErrorInterceptor implements HttpInterceptor {

	constructor(private readonly messageService: AbstractCentralMessage) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			tap((res: HttpResponse<any>) => {
				if (res.hasOwnProperty("status") && SuccessStatuses.get(res.status)) {
					this.messageService.setMessage({
						type: MessageType.Success,
						message: "Everything is fine!"
					});
				}
				return res;
			}),
			catchError((err: any) => {
				this.messageService.setMessage({
					type: MessageType.Error,
					message: err.message
				});
				return of(err);
			})
		);
	}
}
