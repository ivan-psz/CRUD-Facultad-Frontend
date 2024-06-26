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

  public goListAlumno(){
    this.router.navigate(['list-alumnos']);
  }

}
