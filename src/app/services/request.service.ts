import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  public getPortfolio(){
    const url = "assets/portfolio.json"
    return this.http.get(url)
  }

  public getInfo(){
    const url = "assets/me.json"
    return this.http.get(url)
  }
}
