import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from '../../services/alumnos.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAlumnoModalComponent } from '../../modals/delete-alumno-modal/delete-alumno-modal.component';

@Component({
  selector: 'app-p-alumno-screen',
  templateUrl: './p-alumno-screen.component.html',
  styleUrl: './p-alumno-screen.component.scss'
})

export class PAlumnoScreenComponent implements OnInit {

  public matriculaAlumno: Number = 0;
  public alumno: any = {};

  constructor(
    private service: AlumnosService,
    private router: Router,
    private location: Location,
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ){

  }

  ngOnInit(): void {
    this.alumno = this.service.esquemaAlumno();

      if(this.activatedRoute.snapshot.params['matricula'] != undefined){
        this.matriculaAlumno = this.activatedRoute.snapshot.params['matricula'];
        console.log("Matricula: ", this.matriculaAlumno);
        this.obtenerAlumnoByMatricula();
      }
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

  public regresar(){
    this.location.back();
  }

  public editarAlumno(){
    this.router.navigate(['post-alumno/'+this.matriculaAlumno]);
  }

  public eliminar(matriculaAlumno: Number){
    const dialogRef = this.dialog.open(DeleteAlumnoModalComponent,{
      data: {matricula: matriculaAlumno},
      height: '238px',
      width: '328px'
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result.isDelete){
        console.log("Alumno eliminado");
        this.location.back();
      }else{
        console.log("No se eliminó al alumno");
      }
    })
  }

}
