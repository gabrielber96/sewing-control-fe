import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ServiciosGenerales {
  // API path
  URL_BACKEND = environment.BACKEND_URL;

  constructor(public http: HttpClient, private router: Router) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }),
  };

  signout() {
    /*  let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json');
    headers = headers.set(
      'Authorization',
      'Bearer ' + localStorage.getItem('cofide_token')
    );
    this.http
      .get(this.URL_BACKEND + '/api/signout', {
        headers: headers,
      })
      .subscribe(
        (resp) => {
          this.menu.close();
          localStorage.removeItem('cofide_token');
          localStorage.clear();
          this.router.navigateByUrl('/login');
        },
        (error) => {
          this.menu.close();
          localStorage.removeItem('cofide_token');
          localStorage.clear();
          this.router.navigateByUrl('/login');
        }
      ); */
    localStorage.removeItem("system_token");
    localStorage.clear();
  }

  RegistrarUser(customer): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    headers = headers.set(
      "Authorization",
      "Basic " + localStorage.getItem("cofide_token")
    );

    return this.http.post(this.URL_BACKEND + "/api/signup", customer, {
      headers: headers,
    });
  }

  loginNormal(dni, password): Observable<any> {
    // console.log(token)

    return this.http.post(this.URL_BACKEND + "/signin", {
      dni,
      password,
    });
  }
}
