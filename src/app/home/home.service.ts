import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {
    constructor(private httpClient: HttpClient) { }

    public getData(apiName: string) {

        return this.httpClient.get("http://localhost:3000/" + apiName,
            { withCredentials: true });
    }
}