import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponseDto } from './interfaces/IResponseDto';
import { IUserDto } from './interfaces/IUserDto';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = undefined;
  private isLogged = false;
  private email?: string = undefined;
  private token?: string = undefined;

  private url: string = 'localhost:3000/api/auth';

  constructor(
    private http: HttpClient,
  ){}


  loginUser(email: string): Observable<IResponseDto<IUserDto>> {
    this.email = email;
    return this.http.post<IResponseDto<IUserDto>>(`${this.url}/register`, {email});
  }

  authenticatedCode(code: string | number):Observable<IResponseDto<string>> {
    return this.http.get<IResponseDto<string>>(`${this.url}/verify-account/${code}`)
      .pipe(
        tap( data => this.token = data.data ),
        tap( () => this.isLogged = true )
      );
  }

  logout(){}

  getUser(){}

  get getToken():string | undefined {
    if( !this.isLogged ) return undefined;
    return this.token;
  }

  get getEmail():string | undefined {
    return this.email;
  }

  get getIsLogged(): boolean {
    return this.isLogged;
  }

}
