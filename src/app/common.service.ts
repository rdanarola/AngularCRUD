import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CommonService {

  constructor(private http: Http) { }
  savetodo(todo) {
    return this.http.post('http://localhost:8080/api/savetodo/', todo).map((response: Response) => response.json())
  }

  gettodo() {
    return this.http.get('http://localhost:8080/api/gettodo').map((response: Response) => response.json())
  }

  deletetodo(id) {
    return this.http.post('http://localhost:8080/api/deletetodo/', { 'id': id }).map((response: Response) => response.json())
  }
}