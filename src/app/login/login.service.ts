import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class LoginService {

    loggedIn: boolean;
    apiUrl: String;

    constructor(private http: HttpClient) {
        this.loggedIn = false;// new Subject();
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
                //this.loggedIn.next(resp.loggedIn);
                this.loggedIn = true;
                //console.log(resp.loggedIn);
            }, (errorResp) => {
                this.loggedIn = false;
            });
        //console.log("dologin: " + this.loggedIn);
    }

    getLogin() {
        this.http.get(this.apiUrl + '/login', {
            withCredentials: true
        }).subscribe((resp: any) => {
            //this.loggedIn.next(resp.loggedIn);
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
            //this.loggedIn.next(false);
            this.loggedIn = false;
        });
    }

    public get logged(): boolean {
        this.getLogin();
        console.log("logged: " + this.loggedIn);
        return this.loggedIn;
    }

}