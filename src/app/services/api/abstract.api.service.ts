import { Observable } from "rxjs";

export interface AbstractApiService {
	get<T>(url: string): Observable<T>;
	post<T>(url: string, params: T): Observable<T>;
	put<T>(url: string, params: T): Observable<T>;
	delete<T>(url: string): Observable<T>;
}
