import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-editar-alumno-modal',
  templateUrl: './editar-alumno-modal.component.html',
  styleUrl: './editar-alumno-modal.component.scss'
})

export class EditarAlumnoModalComponent implements OnInit {

  constructor(
    public service: AlumnosService,
    private dialogRef: MatDialogRef<EditarAlumnoModalComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any
  ){ }


  ngOnInit(): void {
    console.log("Alumno: ", this.data);
  }

  public cerrar_modal(){
    this.dialogRef.close({isDelete:false});
  }

  public editarAlumno(){
    this.service.editarAlumno(this.data).subscribe(
      (response)=>{
        console.log(response);
        this.dialogRef.close({isDelete: true});
      },(error)=>{
        this.dialogRef.close({isDelete: false});
      }
    );
  }
}
