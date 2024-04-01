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
export class DocentesService {

  constructor(
    private http: HttpClient,
    private validatorService : ValidatorService,
    private errorService: ErrorsService,
  ) { }

  public esquemaDocente()
  {
    return{
      'num_trabajador': '',
      'nombre': '',
      'ap_paterno': '',
      'ap_materno': ''
    }
  }

  public validarDocente(data: any){
    console.log("Validando docente...", data);
    let errors: any = [];

    if (!this.validatorService.required(data["num_trabajador"]))
    {
      errors["num_trabajador"] = this.errorService.required;  
    } else if(!this.validatorService.min(data["num_trabajador"], 5)){
      errors["num_trabajador"] = this.errorService.min(5);
    } else if(!this.validatorService.max(data["num_trabajador"], 5)){
      errors["num_trabajador"] = this.errorService.max(5);
    } else if (!this.validatorService.numeric(data["num_trabajador"])) 
    {
      alert("El número de trabajador es un valor numérico");
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

  public registrarDocente(data: any): Observable<any>{
    return this.http.post<any>(`${environment.url_api}/docentes/`,data, httpOptions);
  }

  public obtenerListaDocentes(): Observable<any>{
    return this.http.get<any>(`${environment.url_api}/list-docentes/`, httpOptions);
  }

  public obtenerDocenteByNumTrabajador(numeroTrabajador: Number){
    return this.http.get<any>(`${environment.url_api}/docentes/?num_trabajador=${numeroTrabajador}`, httpOptions);
  }

  public editarDocente (data: any): Observable <any>{
    return this.http.put<any>(`${environment.url_api}/docentes-edit/`, data);
  }

  public eliminarDocente(numeroTrabajador: Number): Observable <any>{
    return this.http.delete<any>(`${environment.url_api}/docentes-edit/?num_trabajador=${numeroTrabajador}`);
  }


}
