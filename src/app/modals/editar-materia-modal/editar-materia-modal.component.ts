import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MateriasService } from '../../services/materias.service';
import { DocentesService } from '../../services/docentes.service';

@Component({
  selector: 'app-editar-materia-modal',
  templateUrl: './editar-materia-modal.component.html',
  styleUrl: './editar-materia-modal.component.scss'
})

export class EditarMateriaModalComponent implements OnInit {

  public docente: any = {};
  
  constructor(
    public service: MateriasService,
    public serviceDocente: DocentesService,
    private dialogRef: MatDialogRef<EditarMateriaModalComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any
  ){ }

  ngOnInit(): void {
    console.log("Materia: ", this.data);
    this.obtenerDocenteByMatricula();
  }

  public cerrar_modal(){
    this.dialogRef.close({isDelete:false});
  }

  public editarMateria(){
    this.service.editarMateria(this.data).subscribe(
      (response)=>{
        console.log(response);
        this.dialogRef.close({isDelete: true});
      },(error)=>{
        console.log(error);
        alert("Error al editar la información de la materia. Verifique que "+this.docente.nombre+" "+this.docente.ap_paterno+" "+this.docente.ap_materno+" no esté impartiendo alguna otra clase.")
        this.dialogRef.close({isDelete: false});
      }
    );
  }

  public obtenerDocenteByMatricula(){
    this.serviceDocente.obtenerDocenteByNumTrabajador(this.data.docente_FK).subscribe(
      (response)=>{
        this.docente = response;
        console.log("Datos del docente: ", this.docente);
      }, (error)=>{
        alert("Error al obtener la información del docente");
      }
    );
  }

}
