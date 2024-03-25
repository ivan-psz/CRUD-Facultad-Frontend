import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leftside-bar',
  templateUrl: './leftside-bar.component.html',
  styleUrl: './leftside-bar.component.scss'
})

export class LeftsideBarComponent implements OnInit {

  @Output() cerrar = new EventEmitter();

  constructor(
    private router: Router
  ){ }

  ngOnInit(): void {
    
  }

  public cerrar_drawer(){
    this.cerrar.emit();
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
