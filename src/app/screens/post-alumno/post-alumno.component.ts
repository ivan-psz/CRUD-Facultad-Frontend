import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from '../../services/alumnos.service';

declare var $ :any; //JQuery

@Component({
  selector: 'app-post-alumno',
  templateUrl: './post-alumno.component.html',
  styleUrl: './post-alumno.component.scss'
})

export class PostAlumnoComponent implements OnInit {

  public alumno: any = {};
  //detectar errores
  public errors:any = {};
  //datos persona
  public matricula: string = '';
  public nombre: string = '';
  public ap_paterno: string = '';
  public ap_materno: string = '';

  constructor(
    private router: Router,
    private service: AlumnosService
  ){ }

  ngOnInit(): void {
    this.alumno = this.service.esquemaAlumno();
    console.log("Alumno: ", this.alumno);
  }

  public inicializarUsuario() 
  {
    return {
      matricula: '',
      nombre: '',
      ap_paterno: '',
      ap_materno: ''
    };
  }

  public registrar(): boolean
  {
    this.errors = [];

    this.errors = this.service.validarAlumno(this.alumno);
    
    if(!$.isEmptyObject(this.errors))
    {
      return false;
    }

    return true;

  }

  public regresar()
  {
    this.router.navigate([""]);
  }

}
