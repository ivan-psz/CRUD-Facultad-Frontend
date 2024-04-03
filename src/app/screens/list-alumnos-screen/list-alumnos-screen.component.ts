import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from '../../services/alumnos.service';

declare var $ :any; //JQuery

@Component({
  selector: 'app-list-alumnos-screen',
  templateUrl: './list-alumnos-screen.component.html',
  styleUrl: './list-alumnos-screen.component.scss'
})

export class ListAlumnosScreenComponent implements OnInit {

  public lista_vacia: boolean = false;
  public lista_alumnos: any[] = [];

  constructor(
    private service: AlumnosService,
    private router: Router
  ){ }

  ngOnInit(): void {
      this.obtenerAlumnos();
  }

  public obtenerAlumnos(){
    this.service.obtenerListaAlumnos().subscribe(
      (response)=>{
        this.lista_alumnos = response;
        console.log("Lista alumnos: ", this.lista_alumnos);
        if(this.lista_alumnos.length < 1){
          this.lista_vacia = true;
        }
      }
    )
  }

  public goAlumno(matricula: number){
    this.router.navigate(['alumno/'+matricula]);
  }

}
