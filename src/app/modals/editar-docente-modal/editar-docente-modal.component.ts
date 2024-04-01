import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DocentesService } from '../../services/docentes.service';

@Component({
  selector: 'app-editar-docente-modal',
  templateUrl: './editar-docente-modal.component.html',
  styleUrl: './editar-docente-modal.component.scss'
})
export class EditarDocenteModalComponent implements OnInit {

  constructor(
    public service: DocentesService,
    private dialogRef: MatDialogRef<EditarDocenteModalComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any
  ){ }

  ngOnInit(): void {
    console.log("Docente: ", this.data);
  }

  public cerrar_modal(){
    this.dialogRef.close({isDelete:false});
  }

  public editarDocente(){
    this.service.editarDocente(this.data).subscribe(
      (response)=>{
        console.log(response);
        this.dialogRef.close({isDelete: true});
      },(error)=>{
        this.dialogRef.close({isDelete: false});
      }
    );
  }

}
