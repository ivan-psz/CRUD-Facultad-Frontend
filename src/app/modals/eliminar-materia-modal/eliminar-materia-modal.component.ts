import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MateriasService } from '../../services/materias.service';

@Component({
  selector: 'app-eliminar-materia-modal',
  templateUrl: './eliminar-materia-modal.component.html',
  styleUrl: './eliminar-materia-modal.component.scss'
})
export class EliminarMateriaModalComponent implements OnInit {

  constructor(
    public service: MateriasService,
    private dialogRef: MatDialogRef<EliminarMateriaModalComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any
  ){ }

  ngOnInit(): void {
    console.log("NRC de la materia: ", this.data.nrc);
  }

  public cerrar_modal(){
    this.dialogRef.close({isDelete:false});
  }

  public eliminarMateria(){
    this.service.eliminarMateria(this.data.matricula).subscribe(
      (response)=>{
        console.log(response);
        this.dialogRef.close({isDelete: true});
      },(error)=>{
        this.dialogRef.close({isDelete: false});
      }
    );
  }

}
