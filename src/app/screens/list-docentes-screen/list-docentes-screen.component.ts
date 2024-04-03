import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DocentesService } from '../../services/docentes.service';
import { DeleteDocenteModalComponent } from '../../modals/delete-docente-modal/delete-docente-modal.component';

declare var $ :any; //JQuery

@Component({
  selector: 'app-list-docentes-screen',
  templateUrl: './list-docentes-screen.component.html',
  styleUrl: './list-docentes-screen.component.scss'
})

export class ListDocentesScreenComponent implements OnInit {

  public numTrabajador: Number = 0;
  public docente: any = {};
  public lista_docentes: any[] = [];
  public lista_vacia: boolean = false;

  constructor(
    private service: DocentesService,
    private router: Router,
    private location: Location,
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ){ }

  ngOnInit(): void {
    this.obtenerDocentes();

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

  public obtenerDocentes(){
    this.service.obtenerListaDocentes().subscribe(
      (response)=>{
        this.lista_docentes = response;
        console.log("Lista docentes: ", this.lista_docentes);
        if(this.lista_docentes.length < 1){
          this.lista_vacia = true;
        }
      }
    )
  }

  public editarDocente(num_trabajador: Number){
    this.router.navigate(['post-docente/'+num_trabajador]);
  }

  public eliminarDocente(numTrabajador: Number){
    const dialogRef = this.dialog.open(DeleteDocenteModalComponent,{
      data: {num_trabajador: numTrabajador},
      height: '238px',
      width: '328px'
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result.isDelete){
        console.log("Docente eliminado");
        window.location.reload();
      }else{
        console.log("No se eliminó al docente");
      }
    })
  }

}
