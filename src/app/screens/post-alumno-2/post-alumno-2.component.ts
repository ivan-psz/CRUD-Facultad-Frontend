import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from '../../services/alumnos.service';
import { Location } from '@angular/common';

declare var $ :any; //JQuery

@Component({
  selector: 'app-post-alumno-2',
  templateUrl: './post-alumno-2.component.html',
  styleUrl: './post-alumno-2.component.scss'
})

export class PostAlumno2Component implements OnInit{

  public matriculaAlumno: Number = 0;
  public alumno: any = {};
  //detectar errores
  public errors:any = {};
  //datos persona

  public editar: boolean = false;

  constructor(
    private router: Router,
    private service: AlumnosService,
    public activatedRoute: ActivatedRoute,
    private location: Location
  ){ }

  ngOnInit(): void {
    this.alumno = this.service.esquemaAlumno();

    if(this.activatedRoute.snapshot.params['matricula'] != undefined){
      this.editar = true;
      this.matriculaAlumno = this.activatedRoute.snapshot.params['matricula'];
      console.log("Matricula: ", this.matriculaAlumno);
      this.obtenerAlumnoByMatricula();
    }
    console.log("Alumno: ", this.alumno);
  }

  public obtenerAlumnoByMatricula(){
    this.service.obtenerAlumnoByMatricula(this.matriculaAlumno).subscribe(
      (response)=>{
        this.alumno = response;
        console.log("Datos del alumno: ", this.alumno);
      }, (error)=>{
        alert("Error al obtener la información del alumno");
      }
    );
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
    this.location.back();
  }

  public actualizar(): boolean{
    //Validar
    this.errors = [];

    this.errors = this.service.validarAlumno(this.alumno);

    if(!$.isEmptyObject(this.errors)){
      return false;
    }
    console.log("Pasó la validación");
    
    this.service.editarAlumno(this.alumno).subscribe(
      (response)=>{
        alert("Alumno editado correctamente");
       console.log("Alumno editado: ", response);
       this.router.navigate(["/"]);
      }, (error)=>{
        alert("No se pudo editar al alumno");
      }
    );

    return true;
  }

}
