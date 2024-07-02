import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [UserComponent,FormComponent],
  templateUrl: './user-app.component.html',
  styleUrl: './user-app.component.css'
})
export class UserAppComponent  implements OnInit{

  titulo: string ='Listado de usuario.!!'
// Atributo openFormulario para mostrar o cerrar el formulario
  openShowForm: boolean = false;
// Inicializamos la lista de usuarios
  users: User[] = [];
//To select the user and edit it we create an instance of user object
  userSelected : User;
// invocamos el servicio  service  de tipo UserService en el constructor
  constructor(private service :UserService){
    this.userSelected = new User();
  }
// implementamos el metodo OnInit que es un metodo callback o de comunicación
  ngOnInit(): void {
    this.service.findAll().subscribe(users => this.users = users);
}
// Method to add elements to the user list, managing the state in an immutable way
addUser(user:User){
//Condicion que valida el id del usuario y map devuelve el array user con los resultados.
if(user.id > 0){
  this.service.update(user).subscribe(userUpdated =>{
    this.users = this.users.map(usuario => (usuario.id == userUpdated.id)? {...userUpdated} : usuario);
})
} else{
  this.service.create(user).subscribe(userNew =>{
    this.users= [...this.users,{...userNew}];
  })
}
 this.userSelected = new User(); // Formatea o limpia el formulario
}
//Metodo para remover el id,filter devuelve una nueva instancia inmutable,con los elementos del arreglo diferentes al id
removeUser(id:number):void{
  this.service.remove(id).subscribe(()=>{
    this.users = this.users.filter(user => user.id != id);
 })
}
// Metodo para editar el Usuario del formulario
editUser(user : User): void{
  this.userSelected = {...user};// Desestructurando el objeto y clonarlo
}
// mostrar o cerrar el formulario
switchForm(){
  this.openShowForm = !this.openShowForm;
}

}
