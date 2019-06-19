import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class LoginService {

    loggedIn: boolean;
    apiUrl: String;

    constructor(private http: HttpClient) {
        this.loggedIn = false;
        this.getLogin();
        this.apiUrl = "http://localhost:3000";
    }

    doLogin(username: string, password: string) {
        this.http.post(this.apiUrl + '/login', {
            username: username,
            password: password
        }, {
                withCredentials: true
            }).subscribe((resp: any) => {
                this.loggedIn = true;
            }, (errorResp) => {
                this.loggedIn = false;
            });
    }

    getLogin() {
        this.http.get(this.apiUrl + '/login', {
            withCredentials: true
        }).subscribe((resp: any) => {
            this.loggedIn = resp.loggedIn;
            console.log("resp: " + resp.loggedIn);
        }, (errorResp) => {
            console.log(errorResp);
        })
    }

    public logout() {
        this.http.post(this.apiUrl + '/logout', {}, {
            withCredentials: true
        }).subscribe(() => {
            this.loggedIn = false;
        });
    }

    public get logged(): boolean {
        this.getLogin();
        console.log("logged: " + this.loggedIn);
        return this.loggedIn;
    }
}