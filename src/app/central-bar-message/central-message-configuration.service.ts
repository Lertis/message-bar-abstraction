import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";
import { CentralMessageConfig } from "./central-message.types";

@Injectable()
export class CentralMessageConfigurationService {
	private readonly CONFIG_URL = 'assets/message.configs.json';
	private config$: Observable<CentralMessageConfig>

	configuration: CentralMessageConfig;

	constructor(private readonly http: HttpClient) { }

	loadConfiguration(): Observable<CentralMessageConfig> {
		this.config$ = this.http.get<CentralMessageConfig>(this.CONFIG_URL).pipe(shareReplay(1))
		this.config$.subscribe(config => this.configuration = config);

		return this.config$;
	}
}
