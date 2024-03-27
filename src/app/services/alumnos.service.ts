import { Injectable } from '@angular/core';
import { ValidatorService } from './tools/validator.service';
import { ErrorsService } from './tools/errors.service'; 
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environments';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AlumnosService {

  constructor(
    private http: HttpClient,
    private validatorService : ValidatorService,
    private errorService: ErrorsService,
  ) { }

  public esquemaAlumno()
  {
    return{
      'matricula': '',
      'nombre': '',
      'ap_paterno': '',
      'ap_materno': ''
    }
  }

  public validarAlumno(data: any){
    console.log("Validando usuario...", data);
    let errors: any = [];

    if (!this.validatorService.required(data["matricula"]))
    {
      errors["matricula"] = this.errorService.required;  
    } else if(!this.validatorService.min(data["matricula"], 9)){
      errors["matricula"] = this.errorService.min(9);
    } else if(!this.validatorService.max(data["matricula"], 9)){
      errors["matricula"] = this.errorService.max(9);
    } else if (!this.validatorService.numeric(data["matricula"])) 
    {
      alert("La matrícula es un valor numérico");
    }

    if (!this.validatorService.required(data["nombre"]))
    {
      errors["nombre"] = this.errorService.required;  
    } else if(!this.validatorService.max(data["nombre"],30))
    {
      errors["nombre"] = this.errorService.max(30);
      alert("Campo sobrepasado");
    }

    if (!this.validatorService.required(data["ap_paterno"]))
    {
      errors["ap_paterno"] = this.errorService.required;  
    } else if(!this.validatorService.max(data["ap_paterno"],30))
    {
      errors["ap_paterno"] = this.errorService.max(30);
      alert("Campo sobrepasado");
    }

    if (!this.validatorService.required(data["ap_materno"]))
    {
      errors["ap_materno"] = this.errorService.required;  
    } else if(!this.validatorService.max(data["ap_materno"],30))
    {
      errors["ap_materno"] = this.errorService.max(30);
      alert("Campo sobrepasado");
    }

    return errors;
  }

  public registrarAlumno(data: any): Observable <any>{
    return this.http.post<any>(`${environment.url_api}/alumnos/`,data, httpOptions);
  }

}
