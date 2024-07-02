import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
//  Input es la propiedad que utiliza el componente principal para comunicar datos al sub-componente
// La sintaxis de corchetes indica que espera recibir datos del componente padre.
  @Input() users: User[]=[];

// Output es la propiedad que utiliza el Subcomponente para enviar datos al componente principal
@Output() idUserEventEmitter = new EventEmitter();
@Output() selectUserEventEmitter = new EventEmitter();
// Se declara este metodo para emitir el mensaje al componente padre
onRemoveUser(id:number): void{
  const confirmRemove = confirm('Esta seguro que desea eliminar');
  if(confirmRemove){
    this.idUserEventEmitter.emit(id);
  }
}
onSelectUser(user : User): void{
  this.selectUserEventEmitter.emit(user);
}
}
