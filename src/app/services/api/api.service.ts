import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AbstractApiService } from "./abstract.api.service";

@Injectable()
export class ApiService implements AbstractApiService {
	constructor(private readonly http: HttpClient) { }

	get<T>(url: string): Observable<T> {
		return this.http.get<T>(url, { headers: { "Access-Control-Allow-Origin": "*" } });
	}

	post<T>(url: string, params: T): Observable<T> {
		return this.http.post<T>(url, params);
	}

	put<T>(url: string, params: T): Observable<T> {
		return this.http.put<T>(url, params);
	}

	delete<T>(url: string): Observable<T> {
		return this.http.delete<T>(url);
	}

}
