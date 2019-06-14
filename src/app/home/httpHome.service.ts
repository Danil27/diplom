import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpClientHome {
    constructor(private httpClient: HttpClient) { }

    public getData(apiName: string) {

        return this.httpClient.get("http://localhost:3000/" + apiName,
            { withCredentials: true });
    }

    public getDataPost(apiName: string, body: any) {
        return this.httpClient.post("http://localhost:3000/" + apiName, body,
            { withCredentials: true });
    }
}