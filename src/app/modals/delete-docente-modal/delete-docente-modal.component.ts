import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DocentesService } from '../../services/docentes.service';

@Component({
  selector: 'app-delete-docente-modal',
  templateUrl: './delete-docente-modal.component.html',
  styleUrl: './delete-docente-modal.component.scss'
})

export class DeleteDocenteModalComponent implements OnInit {

  constructor(
    public service: DocentesService,
    private dialogRef: MatDialogRef<DeleteDocenteModalComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any
  ){ }

  ngOnInit(): void {
    console.log("Número de trabajador del docente: ", this.data.num_trabajador);
  }

  public cerrar_modal(){
    this.dialogRef.close({isDelete:false});
  }

  public eliminarDocente(){
    this.service.eliminarDocente(this.data.num_trabajador).subscribe(
      (response)=>{
        console.log(response);
        this.dialogRef.close({isDelete: true});
      },(error)=>{
        this.dialogRef.close({isDelete: false});
      }
    );
  }

}
