import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";

import { ApiService } from "./services/api/api.service";
import { CentralBarMessageModule } from "./central-bar-message/central-bar-message.module";
import { Message, MessageLogger, MESSAGE_LOGGERS } from "./central-bar-message/central-message.types";
import { HeaderInterceptor } from "./interceptors/header.interceptor";
import { MOCK_CODES } from "./configs/urls";

class ConsoleLogger implements MessageLogger {
	log(message: Message) {
		console.log(`Console log: ${message.message}`);
	}
}

class ServerLogger implements MessageLogger {
	log(message: Message) {
		console.log(`Server log: ${message.message}`);
	}
}

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		CentralBarMessageModule
	],
	providers: [
		ApiService,
		{ provide: MESSAGE_LOGGERS, useClass: ConsoleLogger, multi: true },
		{ provide: MESSAGE_LOGGERS, useClass: ServerLogger, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
		{ provide: MOCK_CODES, useValue: "https://mock.codes" }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
