import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DocentesService } from '../../services/docentes.service';
import { DeleteDocenteModalComponent } from '../../modals/delete-docente-modal/delete-docente-modal.component';

@Component({
  selector: 'app-p-docente-screen',
  templateUrl: './p-docente-screen.component.html',
  styleUrl: './p-docente-screen.component.scss'
})

export class PDocenteScreenComponent implements OnInit{

  public numTrabajador: Number = 0;
  public docente: any = {};

  constructor(
    private service: DocentesService,
    private router: Router,
    private location: Location,
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ){ }

  ngOnInit(): void {
    this.docente = this.service.esquemaDocente();

    if(this.activatedRoute.snapshot.params['num_trabajador'] != undefined){
      this.numTrabajador = this.activatedRoute.snapshot.params['num_trabajador'];
      console.log("Número de trabajador: ", this.numTrabajador);
      this.obtenerDocenteByNumero();
    }
  }

  public obtenerDocenteByNumero(){
    this.service.obtenerDocenteByNumTrabajador(this.numTrabajador).subscribe(
      (response)=>{
        this.docente = response;
        console.log("Datos del docente: ", this.docente);
      }, (error)=>{
        alert("Error al obtener la información del docente");
      }
    );
  }

  public regresar(){
    this.location.back();
  }

  public editarDocente(){
    this.router.navigate(['post-docente/'+this.numTrabajador]);
  }

  public eliminar(numTrabajador: Number){
    const dialogRef = this.dialog.open(DeleteDocenteModalComponent,{
      data: {num_trabajador: numTrabajador},
      height: '238px',
      width: '328px'
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result.isDelete){
        console.log("Docente eliminado");
        this.location.back();
      }else{
        console.log("No se eliminó al docente");
      }
    })
  }



}
