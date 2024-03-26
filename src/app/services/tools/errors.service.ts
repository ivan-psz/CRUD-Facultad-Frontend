import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ErrorsService {

  public generic: string;
  public required: string;
  public numeric: string;
  public betweenDate: string;
  public email: string;

  constructor() {
    this.generic = 'El tipo de dato introducido no es válido';
    this.required = 'Campo requerido';
    this.numeric = 'Solo se aceptan valores numéricos';
    this.betweenDate = 'La fecha no es válida';
    this.email = 'Formato de correo inválido';
   }

   between(min: any, max: any) {
    return 'El valor introducido debe de ser entre ' + min + ' y ' + max;
  }
  max(size: any) {
    return 'Se excedió la longitud del campo aceptada: ' + size;
  }
  min(size: any) 
  {
    return 'El campo no cumple la longitud aceptada: ' + size;
  }

}
