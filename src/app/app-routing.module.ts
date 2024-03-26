import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { AlumnosScreenComponent } from './screens/alumnos-screen/alumnos-screen.component';
import { MateriasScreenComponent } from './screens/materias-screen/materias-screen.component';
import { DocentesScreenComponent } from './screens/docentes-screen/docentes-screen.component';
import { PostAlumno2Component } from './screens/post-alumno-2/post-alumno-2.component';
import { UpdateAlumnoComponent } from './screens/update-alumno/update-alumno.component';
import { DeleteAlumnoComponent } from './screens/delete-alumno/delete-alumno.component';
import { GetAlumnoComponent } from './screens/get-alumno/get-alumno.component';

const routes: Routes = [
  {path: '', component: HomeScreenComponent, pathMatch: 'full'},
  {path: 'alumnos', component: AlumnosScreenComponent, pathMatch: 'full'},
  {path: 'materias', component: MateriasScreenComponent, pathMatch: 'full'},
  {path: 'docentes', component: DocentesScreenComponent, pathMatch: 'full'},
  {path: 'post-alumno', component: PostAlumno2Component, pathMatch: 'full'},
  {path: 'update-alumno', component: UpdateAlumnoComponent, pathMatch: 'full'},
  {path: 'delete-alumno', component: DeleteAlumnoComponent, pathMatch: 'full'},
  {path: 'view-alumnos', component: GetAlumnoComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
