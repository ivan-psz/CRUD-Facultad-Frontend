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
export class MateriasService {

  constructor(
    private http: HttpClient,
    private validatorService : ValidatorService,
    private errorService: ErrorsService,
  ) { }

  public esquemaMateria()
  {
    return{
      'nrc': '',
      'nombre': '',
      'salon': '',
      'horario': '',
      'dia': '',
      'docente_FK': ''
    }
  }

  public validarMateria(data: any){
    console.log("Validando materia...", data);
    let errors: any = [];

    if (!this.validatorService.required(data["nrc"]))
    {
      errors["nrc"] = this.errorService.required;  
    } else if(!this.validatorService.min(data["nrc"], 5)){
      errors["nrc"] = this.errorService.min(5);
    } else if(!this.validatorService.max(data["nrc"], 5)){
      errors["nrc"] = this.errorService.max(5);
    } else if (!this.validatorService.numeric(data["nrc"])) 
    {
      alert("El NRC es un valor numérico");
    }

    if (!this.validatorService.required(data["nombre"]))
    {
      errors["nombre"] = this.errorService.required;  
    } else if(!this.validatorService.max(data["nombre"],90))
    {
      errors["nombre"] = this.errorService.max(90);
      alert("Campo sobrepasado");
    }

    if (!this.validatorService.required(data["salon"]))
    {
      errors["salon"] = this.errorService.required;  
    } else if(!this.validatorService.max(data["salon"],8))
    {
      errors["salon"] = this.errorService.max(8);
      alert("Campo sobrepasado");
    }

    if (!this.validatorService.required(data["horario"]))
    {
      errors["horario"] = this.errorService.required;  
    } else if(!this.validatorService.max(data["horario"],11))
    {
      errors["horario"] = this.errorService.max(11);
      alert("Campo sobrepasado");
    }

    if (!this.validatorService.required(data["dia"]))
    {
      errors["dia"] = this.errorService.required;  
    } else if(!this.validatorService.max(data["dia"],1))
    {
      errors["dia"] = this.errorService.max(1);
      alert("Campo sobrepasado");
    }

    if (!this.validatorService.required(data["docente_FK"]))
    {
      errors["docente_FK"] = this.errorService.required;  
    } else if(!this.validatorService.max(data["docente_FK"],5))
    {
      errors["docente_FK"] = this.errorService.max(5);
      alert("Campo sobrepasado");
    }

    return errors;
  }

  public registrarMateria(data: any): Observable<any>{
    return this.http.post<any>(`${environment.url_api}/materias/`,data, httpOptions);
  }
  
  public obtenerListaMaterias(): Observable<any>{
    return this.http.get<any>(`${environment.url_api}/list-materias/`, httpOptions);
  }

  public obtenerMateriaByNRC(nrc: Number){
    //return this.http.get<any>(`${environment.url_api}/docentes/?num_trabajador=${nrc}`, httpOptions);
  }

  public editarMateria (data: any)/*: Observable <any>*/{
    //return this.http.put<any>(`${environment.url_api}/docentes-edit/`, data);
  }

  public eliminarMateria(nrc: Number)/*: Observable <any>*/{
    //return this.http.delete<any>(`${environment.url_api}/docentes-edit/?num_trabajador=${nrc}`);
  }

}
