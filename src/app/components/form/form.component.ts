import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
// importamos el modelo user
  @Input()   user : User;
//  Pasarle al componente Principal el objeto user
  @Output() newUserEventEmitter: EventEmitter<User>= new EventEmitter();
// Lo inicializamos en el constructor
  constructor(){
    this.user = new User();
  }
//Implementamos el metodo onSubmit  para recibir  los datos del formulario y limpiarlo
onSubmit(userForm:NgForm):void{
   if(userForm.valid){
     this.newUserEventEmitter.emit(this.user);
     console.log(this.user);
    }
    userForm.reset();
    userForm.resetForm();
}
OnClear(userForm:NgForm):void{
  this.user= new User();
  userForm.reset();
  userForm.resetForm();
}
}
