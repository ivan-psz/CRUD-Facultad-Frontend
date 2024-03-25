import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materias-screen',
  templateUrl: './materias-screen.component.html',
  styleUrl: './materias-screen.component.scss'
})

export class MateriasScreenComponent implements OnInit {

  constructor(
    private router: Router
  ){ }

  ngOnInit(): void {
    
  }

  public goPostMateria(){
    this.router.navigate(['post-materia']);
  }

  public goUpdateMateria(){
    this.router.navigate(['update-materia']);
  }

  public goDeleteMateria(){
    this.router.navigate(['delete-materia']);
  }

  public goGetMateria(){
    this.router.navigate(['view-materias']);
  }

}
