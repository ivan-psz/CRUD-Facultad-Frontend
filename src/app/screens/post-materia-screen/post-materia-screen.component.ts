import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MateriasService } from '../../services/materias.service';
import { DocentesService } from '../../services/docentes.service';

declare var $ :any; //JQuery

@Component({
  selector: 'app-post-materia-screen',
  templateUrl: './post-materia-screen.component.html',
  styleUrl: './post-materia-screen.component.scss'
})
export class PostMateriaScreenComponent implements OnInit {

  public nrc: Number = 0;
  public materia: any = {};
  //detectar errores
  public errors:any = {};
  public docente = {};
  public docentes: any[] = [];
  public dias: any[] = [
    {value: "L", nombre: "Lunes"}, 
    {value: "M", nombre: "Martes"}, 
    {value: "I", nombre: "Miércoles"},
    {value: "J", nombre: "Jueves"}, 
    {value: "V", nombre: "Viernes"}];

  public editar: boolean = false;

  constructor(
    private router: Router,
    private service: MateriasService,
    public activatedRoute: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog,
    public docenteService: DocentesService
  ){ }

  ngOnInit(): void {
    this.materia = this.service.esquemaMateria();
    this.obtenerDocentes();

    /*if(this.activatedRoute.snapshot.params['nrc'] != undefined){
      this.editar = true;
      this.nrc = this.activatedRoute.snapshot.params['nrc'];
      console.log("NRC: ", this.nrc);
      this.obtenerMateriaByNRC();
    }*/

    console.log("Materia: ", this.materia);
  }

  public obtenerMateriaByNRC(){
    /*this.service.obtenerMateriaByNRC(this.nrc).subscribe(
      (response)=>{
        this.materia = response;
        console.log("Datos de la materia: ", this.materia);
      }, (error)=>{
        alert("Error al obtener la información de la materia");
      }
    );*/
  }

  public inicializarUsuario() 
  {
    return {
      nrc: '',
      nombre: '',
      salon: '',
      horario: '',
      dia: '',
      docente_FK: ''
    };
  }

  public registrar(): boolean
  {
    this.errors = [];

    this.errors = this.service.validarMateria(this.materia);
    
    if(!$.isEmptyObject(this.errors))
    {
      return false;
    }

    this.service.registrarMateria(this.materia).subscribe(
      (response)=>{
        alert("Materia registrada correctamente");
        console.log("Usuario registrado: ", response);
        this.router.navigate(['']);
      }, (error)=>{
        alert("Hubo un error al registrar la materia. Verifique que el NRC o el número de trabajador no se repita.");
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

    this.errors = this.service.validarMateria(this.materia);

    if(!$.isEmptyObject(this.errors)){
      return false;
    }
    console.log("Pasó la validación");
    
    /*const dialogRef = this.dialog.open(EditarDocenteModalComponent,{
      data: this.materia,
      height: '238px',
      width: '328px'
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result.isDelete){
        console.log("Materia editada");
        this.location.back();
      }else{
        console.log("No se editó la materia");
      }
    })*/

    return true;
  }

  public changeDocente(event: any){
    console.log("Docente value: ",this.materia.docente_FK);
  }

  public changeDia(event: any){
    console.log("Día value: ",this.materia.dia);
  }

  public obtenerDocentes(){
    this.docenteService.obtenerListaDocentes().subscribe(
      (response)=>{
        this.docentes = response;
        console.log("Lista docentes: ", this.docentes);
        if(!this.verificarDocentes()){
          alert("No hay docentes en el sistema. Dé de alta a al menos uno para poder crear materias.");
          this.router.navigate(['docentes']);
        }
      }
    )
  }

  public verificarDocentes(): boolean{
    if(this.docentes.length > 0){
      return true;
    }
    return false;
  }

  public completar(event: any){
    const horaInicio = event.target.value;
    const horaFin = this.agregarHora(horaInicio);

    this.materia.horario = `${horaInicio}-${horaFin}`;
  }

  public agregarHora(horaInicio: string): string{
    const [hora] = horaInicio.split(':');
    const nuevaHora = (parseInt(hora)) % 24; // Handle overflow for hours
    const horasFormato = nuevaHora.toString().padStart(2, '0'); // Ensure two-digit format
    return `${horasFormato}:59`;
  }

}
