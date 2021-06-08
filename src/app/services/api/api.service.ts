import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AbstractApiService } from "./abstract.api.service";

@Injectable()
export class ApiService implements AbstractApiService {
	constructor(private readonly http: HttpClient) { }

	get<T>(url: string): Observable<T> {
		return this.http.get<T>(url, { headers: this.getCorsHeaders() });
	}

	post<T>(url: string, params: T): Observable<T> {
		return this.http.post<T>(url, params, { headers: this.getCorsHeaders() });
	}

	put<T>(url: string, params: T): Observable<T> {
		return this.http.put<T>(url, params, { headers: this.getCorsHeaders() });
	}

	delete<T>(url: string): Observable<T> {
		return this.http.delete<T>(url, { headers: this.getCorsHeaders() });
	}

	// Not sure why, but Http interceptor doesn't set CORS headers correctly :(
	private getCorsHeaders(): HttpHeaders {
		return new HttpHeaders({ "Access-Control-Allow-Origin": "*" });
	}

}
