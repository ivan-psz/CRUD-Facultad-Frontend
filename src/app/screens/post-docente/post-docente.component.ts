import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DocentesService } from '../../services/docentes.service';
import { EditarDocenteModalComponent } from '../../modals/editar-docente-modal/editar-docente-modal.component';

declare var $ :any; //JQuery

@Component({
  selector: 'app-post-docente',
  templateUrl: './post-docente.component.html',
  styleUrl: './post-docente.component.scss'
})
export class PostDocenteComponent implements OnInit {

  public numeroDocente: Number = 0;
  public docente: any = {};
  //detectar errores
  public errors:any = {};

  public editar: boolean = false;

  constructor(
    private router: Router,
    private service: DocentesService,
    public activatedRoute: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog
  ){ }

  ngOnInit(): void {
      this.docente = this.service.esquemaDocente();

      if(this.activatedRoute.snapshot.params['num_trabajador'] != undefined){
        this.editar = true;
        this.numeroDocente = this.activatedRoute.snapshot.params['num_trabajador'];
        console.log("Número de trabajador: ", this.numeroDocente);
        this.obtenerDocenteByMatricula();
      }

      console.log("Docente: ", this.docente);
  }

  public obtenerDocenteByMatricula(){
    this.service.obtenerDocenteByNumTrabajador(this.numeroDocente).subscribe(
      (response)=>{
        this.docente = response;
        console.log("Datos del docente: ", this.docente);
      }, (error)=>{
        alert("Error al obtener la información del docente");
      }
    );
  }

  public inicializarUsuario() 
  {
    return {
      num_trabajador: '',
      nombre: '',
      ap_paterno: '',
      ap_materno: ''
    };
  }

  public registrar(): boolean
  {
    this.errors = [];

    this.errors = this.service.validarDocente(this.docente);
    
    if(!$.isEmptyObject(this.errors))
    {
      return false;
    }

    this.service.registrarDocente(this.docente).subscribe(
      (response)=>{
        alert("Docente registrado correctamente");
        console.log("Usuario registrado: ", response);
        this.router.navigate(['']);
      }, (error)=>{
        alert("Hubo un error al registrar al docente");
        console.log(error);
      }
    );

    return true;

  }

  public regresar()
  {
    this.location.back();
  }

  public actualizar(): boolean{
    //Validar
    this.errors = [];

    this.errors = this.service.validarDocente(this.docente);

    if(!$.isEmptyObject(this.errors)){
      return false;
    }
    console.log("Pasó la validación");
    
    const dialogRef = this.dialog.open(EditarDocenteModalComponent,{
      data: this.docente,
      height: '238px',
      width: '328px'
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result.isDelete){
        console.log("Docente editado");
        this.location.back();
      }else{
        console.log("No se editó al docente");
      }
    })

    return true;
  }

}
