import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  private authUrl = '/auth';
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`${this.baseUrl}${this.authUrl}/login`, body);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${this.authUrl}/register`, user);
  }

}
