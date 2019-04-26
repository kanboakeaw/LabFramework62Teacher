import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";


const authServiceUrl = "http://localhost:3000/";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  register(
    rank: string,
    first_name: string,
    last_name: string,
    id_mil: string,
    unit_name: string,
    username: string,
    password: string
  ): Observable<any> {
    return this.http
      .post<any>(
        authServiceUrl + "login/register",
        { rank, first_name, last_name, id_mil, unit_name, username, password },
        httpOptions
      )
      .pipe();
  }


  constructor() { }
}


