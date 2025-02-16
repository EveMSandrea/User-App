import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users : User []= [];
  private url: string = 'http://localhost:8080/users-rest';

  constructor(private http: HttpClient) { }

// Implementamos el metodo observable de la libreria rxjs que nos convertira los objetos en un flujo string

findAll():Observable<User[]>{
  return this.http.get<User[]>(this.url);
}
findById(id:number):Observable<User>{
 return this.http.get<User>(`${this.url}/${id}`);
}
create(user:User):Observable<User>{
  return this.http.post<User>(this.url,user);
}
update(user:User):Observable<User>{
  return this.http.put<User>(`${this.url}/${user.id}`,user);
}
remove(id:number):Observable<void>{
  return this.http.delete<void>(`${this.url}/${id}`);
}
}
