import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MateriasService } from '../../services/materias.service';
import { DocentesService } from '../../services/docentes.service';
import { EliminarMateriaModalComponent } from '../../modals/eliminar-materia-modal/eliminar-materia-modal.component';

@Component({
  selector: 'app-p-materia-screen',
  templateUrl: './p-materia-screen.component.html',
  styleUrl: './p-materia-screen.component.scss'
})

export class PMateriaScreenComponent implements OnInit {

  public nrc: Number = 0;
  public materia: any = {};
  public docente: any = {};
  public docenteMissing: boolean = false;

  constructor(
    private service: MateriasService,
    private router: Router,
    private location: Location,
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private serviceDocente: DocentesService
  ){ }

  ngOnInit(): void {
    this.materia = this.service.esquemaMateria();

    if(this.activatedRoute.snapshot.params['nrc'] != undefined){
      this.nrc = this.activatedRoute.snapshot.params['nrc'];
      console.log("NRC: ", this.nrc);
      this.obtenerMateriaByNRC();
    }
  }
  
  public obtenerMateriaByNRC(){
    this.service.obtenerMateriaByNRC(this.nrc).subscribe(
      (response)=>{
        this.materia = response;
        console.log("Datos de la materia: ", this.materia);
        this.obtenerDocenteByNumero();
      }, (error)=>{
        alert("Error al obtener la información de la materia");
      }
    );
  }

  public obtenerDocenteByNumero(){
    this.serviceDocente.obtenerDocenteByNumTrabajador(this.materia.docente_FK).subscribe(
      (response)=>{
        this.docente = response;
        console.log("Datos del docente: ", this.docente);
      }, (error)=>{
        this.docente = "Por asignar";
        this.docenteMissing = true;
      }
    );
  }

  public regresar(){
    this.location.back();
  }

  public editarMateria(){
    this.router.navigate(['post-materia/'+this.nrc]);
  }

  public eliminar(nrc: Number){
    const dialogRef = this.dialog.open(EliminarMateriaModalComponent,{
      data: {matricula: nrc},
      height: '238px',
      width: '328px'
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result.isDelete){
        console.log("Materia eliminada");
        this.router.navigate(['/']);
      }else{
        console.log("No se eliminó la materia");
      }
    })
  }

}
