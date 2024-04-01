import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-delete-alumno-modal',
  templateUrl: './delete-alumno-modal.component.html',
  styleUrl: './delete-alumno-modal.component.scss'
})

export class DeleteAlumnoModalComponent implements OnInit {

  constructor(
    public service: AlumnosService,
    private dialogRef: MatDialogRef<DeleteAlumnoModalComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any
  ){ }

  ngOnInit(): void {
    console.log("Matricula del alumno: ", this.data.matricula);
  }

  public cerrar_modal(){
    this.dialogRef.close({isDelete:false});
  }

  public eliminarAlumno(){
    this.service.eliminarAlumno(this.data.matricula).subscribe(
      (response)=>{
        console.log(response);
        this.dialogRef.close({isDelete: true});
      },(error)=>{
        this.dialogRef.close({isDelete: false});
      }
    );
  }

}
