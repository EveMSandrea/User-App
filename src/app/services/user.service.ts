import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users : User []= [{
    id: 1,
    name: 'Jose',
    lastname: 'Pedraza',
    email: 'pedrazaJose@gmail.com',
    username:'Petronilo',
    password:'1234567890'
  },
  {
    id: 2,
    name: 'Maria',
    lastname: 'Guzman',
    email: 'MG@hotmail.com',
    username:'MarGuz',
    password:'0987654321'
  }];

  constructor() { }
// Implementamos un metodo observable de la libreria rxjs que nos convertira los objetos en un flujo string
   findAll():Observable<User[]>{
    return of(this.users);
   }

}
