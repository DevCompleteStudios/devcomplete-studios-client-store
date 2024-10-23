import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseDto } from '../interfaces/IResponseDto';
import { IScriptDto } from '../pages/scripts/interface/IScriptDto';

@Injectable({
  providedIn: 'root'
})
export class ScriptsHttpService {

  private url: string = 'http://localhost:3000/api/script';

  constructor(
    private http: HttpClient,
  ){}


  findAll(): Observable<IResponseDto<IScriptDto[]>> {
    return this.http.get<IResponseDto<IScriptDto[]>>(`${this.url}/find-all`);
  }

  findById(){}

  purchaseById(){}

}
