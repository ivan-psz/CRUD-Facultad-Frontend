import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from '../../services/alumnos.service';

declare var $ :any; //JQuery

@Component({
  selector: 'app-post-alumno-2',
  templateUrl: './post-alumno-2.component.html',
  styleUrl: './post-alumno-2.component.scss'
})
export class PostAlumno2Component implements OnInit{

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

    this.service.registrarAlumno(this.alumno).subscribe(
      (response)=>{
        alert("Alumno registrado correctamente");
        console.log("Usuario registrado: ", response);
        this.router.navigate(['']);
      }, (error)=>{
        alert("Hubo un error al registrar al alumno");
        console.log(error);
      }
    );

    return true;

  }

  public regresar()
  {
    this.router.navigate(["alumnos"]);
  }

}
