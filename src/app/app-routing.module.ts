import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { AlumnosScreenComponent } from './screens/alumnos-screen/alumnos-screen.component';
import { MateriasScreenComponent } from './screens/materias-screen/materias-screen.component';
import { DocentesScreenComponent } from './screens/docentes-screen/docentes-screen.component';

const routes: Routes = [
  {path: '', component: HomeScreenComponent, pathMatch: 'full'},
  {path: 'alumnos', component: AlumnosScreenComponent, pathMatch: 'full'},
  {path: 'materias', component: MateriasScreenComponent, pathMatch: 'full'},
  {path: 'docentes', component: DocentesScreenComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }