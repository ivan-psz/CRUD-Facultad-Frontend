import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-docentes-screen',
  templateUrl: './docentes-screen.component.html',
  styleUrl: './docentes-screen.component.scss'
})

export class DocentesScreenComponent implements OnInit {

  constructor(
    private router: Router
  ){ }

  ngOnInit(): void {
    
  }

  public goPostDocente(){
    this.router.navigate(['post-docente']);
  }

  public goUpdateDocente(){
    this.router.navigate(['update-docente']);
  }

  public goDeleteDocente(){
    this.router.navigate(['delete-docente']);
  }

  public goGetDocente(){
    this.router.navigate(['view-docentes']);
  }

}
