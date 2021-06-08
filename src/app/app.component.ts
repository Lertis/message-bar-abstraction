import { Component, Inject, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { MOCK_CODES } from "./configs/urls";
import { ApiService } from "./services/api/api.service";


@Component({
	selector: "app-root",
	templateUrl: "./app.component.html"
})
export class AppComponent implements OnDestroy {
	private readonly destroy$ = new Subject<void>();

	constructor(private readonly api: ApiService,
		@Inject(MOCK_CODES) private readonly mockCodesUrl: string) {}

	getMessage(code: number) {
		this.api.get(`${this.mockCodesUrl}/${code}`).pipe(takeUntil(this.destroy$)).subscribe();
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
