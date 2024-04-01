import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocentesService } from '../../services/docentes.service';

declare var $ :any; //JQuery

@Component({
  selector: 'app-list-docentes-screen',
  templateUrl: './list-docentes-screen.component.html',
  styleUrl: './list-docentes-screen.component.scss'
})

export class ListDocentesScreenComponent implements OnInit {

  public lista_docentes: any[] = [];

  constructor(
    private service: DocentesService,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.obtenerDocentes();
  }

  public obtenerDocentes(){
    this.service.obtenerListaDocentes().subscribe(
      (response)=>{
        this.lista_docentes = response;
        console.log("Lista docentes: ", this.lista_docentes);
      }
    )
  }

  public goDocente(num_trabajador: number){
    this.router.navigate(['docente/'+num_trabajador]);
  }

}
