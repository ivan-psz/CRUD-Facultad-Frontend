import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss'
})

export class HomeScreenComponent implements OnInit {

  constructor(
    private router: Router
  ){ }

  ngOnInit(): void {
    
  }

  public goAlumnos(){
    this.router.navigate(['alumnos']);
  }

  public goMaterias(){
    this.router.navigate(['materias']);
  }

  public goDocentes(){
    this.router.navigate(['docentes']);
  }

}
