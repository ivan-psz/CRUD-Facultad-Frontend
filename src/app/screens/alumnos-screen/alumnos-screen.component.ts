import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos-screen',
  templateUrl: './alumnos-screen.component.html',
  styleUrl: './alumnos-screen.component.scss'
})

export class AlumnosScreenComponent implements OnInit {

  constructor(
    private router: Router
  ){ }

  ngOnInit(): void {
    
  }

  public goPostAlumno(){
    this.router.navigate(['post-alumno']);
  }

  public goUpdateAlumno(){
    this.router.navigate(['update-alumno']);
  }

  public goDeleteAlumno(){
    this.router.navigate(['delete-alumno']);
  }

  public goGetAlumno(){
    this.router.navigate(['view-alumnos']);
  }

}
