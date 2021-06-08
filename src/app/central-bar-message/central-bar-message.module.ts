import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MessageBarComponent } from './message-bar/message-bar.component';
import { ApiErrorInterceptor } from "./api-error.interceptor";
import { MessageService } from "./message.service";
import { AbstractCentralMessage } from "./abstract-cental-message";

@NgModule({
	declarations: [MessageBarComponent],
	imports: [CommonModule],
	exports: [MessageBarComponent],
	providers: [
		MessageService,
		{
			provide: AbstractCentralMessage,
			useClass: MessageService
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ApiErrorInterceptor,
			multi: true
		}
	]
})
export class CentralBarMessageModule { }
