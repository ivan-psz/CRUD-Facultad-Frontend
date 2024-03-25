import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-app',
  templateUrl: './header-app.component.html',
  styleUrl: './header-app.component.scss'
})

export class HeaderAppComponent implements OnInit {
  @Output() drawer = new EventEmitter();

  constructor(
    private router: Router
  ){ }

  ngOnInit(): void {
      
  }

  drawerOpen(){
    this.drawer.emit();
  }

  public goInicio(){
    this.router.navigate(['']);
  }

}
