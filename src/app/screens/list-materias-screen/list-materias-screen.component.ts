import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MateriasService } from '../../services/materias.service';

declare var $ :any; //JQuery


@Component({
  selector: 'app-list-materias-screen',
  templateUrl: './list-materias-screen.component.html',
  styleUrl: './list-materias-screen.component.scss'
})

export class ListMateriasScreenComponent implements OnInit {

  public lista_materias: any[] = [];

  constructor(
    private service: MateriasService,
    private router: Router
  ){ }
  
  ngOnInit(): void {
    this.obtenerMaterias();
  }

  public obtenerMaterias(){
    this.service.obtenerListaMaterias().subscribe(
      (response)=>{
        this.lista_materias = response;
        console.log("Lista materias: ", this.lista_materias);
      }
    )
  }

  public goMateria(nrc: number){
    this.router.navigate(['materia/'+nrc]);
  }

}
