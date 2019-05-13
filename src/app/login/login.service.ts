import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
    constructor(private httpClient: HttpClient) { }

    public getData(username: string, password: string) {
        return this.httpClient.get("http://localhost:3000/" + "login?username=" + username); //+ "&password=" + password);
    }
}