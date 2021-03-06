import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf, Type } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MessageBarComponent } from "./message-bar/message-bar.component";
import { ApiErrorInterceptor } from "./api-error.interceptor";
import { MessageService } from "./message.service";
import { CentralMessageConfigurationService } from "./central-message-configuration.service";
import { AbstractCentralMessage } from "./abstract-cental-message";

@NgModule({
	declarations: [MessageBarComponent],
	imports: [CommonModule],
	exports: [MessageBarComponent],
	providers: [
		CentralMessageConfigurationService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ApiErrorInterceptor,
			multi: true
		},
		{
			provide: APP_INITIALIZER,
			useFactory: (configService: CentralMessageConfigurationService) => () => {
				configService.loadConfiguration().toPromise()
			},
			deps: [CentralMessageConfigurationService],
			multi: true
		},
	]
})

export class CentralBarMessageModule {

	constructor(@Optional() @SkipSelf() parentModule: CentralBarMessageModule) {
		if (parentModule) {
			throw new Error("CentralBarMessageModule is already loaded. Import it in the AppModule only");
		}
	}

	static useDefault(): ModuleWithProviders<CentralBarMessageModule> {
		return {
			ngModule: CentralBarMessageModule,
			providers: [
				{
					provide: AbstractCentralMessage,
					useClass: MessageService
				}
			]
		};
	}

	static extendMessageService(ownClass: Type<AbstractCentralMessage>): ModuleWithProviders<CentralBarMessageModule> {
		return {
			ngModule: CentralBarMessageModule,
			providers: [
				{
					provide: AbstractCentralMessage,
					useClass: ownClass
				}
			]
		};
	}

}
