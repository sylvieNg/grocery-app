import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment as config } from '../../../environments/environment';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {
    }

    get(endpoint: string, headers: any = {}): Observable<any> {
        headers['api-key'] = config.api.key;
        headers['Content-Type'] = 'application/json';
        const httpHeaders = new HttpHeaders(headers);
        return this.http.get(`${config.api.host}/${endpoint}`, { headers: httpHeaders }).pipe(map(res => { return res; }));
    }

    post(endpoint: string, body: any, headers: any = {}): Observable<any> {
        headers['api-key'] = config.api.key;
        headers['Content-Type'] = 'application/json';
        const httpHeaders = new HttpHeaders(headers);
        return this.http.post(`${config.api.host}/${endpoint}`, {
            ...body
        }, { headers: httpHeaders }).pipe(map(res => { return res; }));
    }
}