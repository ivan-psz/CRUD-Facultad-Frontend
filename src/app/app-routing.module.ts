import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { AlumnosScreenComponent } from './screens/alumnos-screen/alumnos-screen.component';
import { MateriasScreenComponent } from './screens/materias-screen/materias-screen.component';
import { DocentesScreenComponent } from './screens/docentes-screen/docentes-screen.component';
import { PostAlumno2Component } from './screens/post-alumno-2/post-alumno-2.component';
import { ListAlumnosScreenComponent } from './screens/list-alumnos-screen/list-alumnos-screen.component';
import { PAlumnoScreenComponent } from './screens/p-alumno-screen/p-alumno-screen.component';

const routes: Routes = [
  {path: '', component: HomeScreenComponent, pathMatch: 'full'},
  {path: 'alumnos', component: AlumnosScreenComponent, pathMatch: 'full'},
  {path: 'materias', component: MateriasScreenComponent, pathMatch: 'full'},
  {path: 'docentes', component: DocentesScreenComponent, pathMatch: 'full'},
  {path: 'post-alumno', component: PostAlumno2Component, pathMatch: 'full'},
  {path: 'post-alumno/:matricula', component: PostAlumno2Component, pathMatch: 'full'},
  {path: 'list-alumnos', component: ListAlumnosScreenComponent, pathMatch: 'full'},
  {path: 'alumno/:matricula', component: PAlumnoScreenComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
