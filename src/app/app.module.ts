import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { HeaderAppComponent } from './partials/header-app/header-app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LeftsideBarComponent } from './partials/leftside-bar/leftside-bar.component';
import { AlumnosScreenComponent } from './screens/alumnos-screen/alumnos-screen.component';
import { MateriasScreenComponent } from './screens/materias-screen/materias-screen.component';
import { DocentesScreenComponent } from './screens/docentes-screen/docentes-screen.component';
import { PostAlumno2Component } from './screens/post-alumno-2/post-alumno-2.component';
import { ListAlumnosScreenComponent } from './screens/list-alumnos-screen/list-alumnos-screen.component';
import { PAlumnoScreenComponent } from './screens/p-alumno-screen/p-alumno-screen.component';
import { DeleteAlumnoModalComponent } from './modals/delete-alumno-modal/delete-alumno-modal.component';
import { EditarAlumnoModalComponent } from './modals/editar-alumno-modal/editar-alumno-modal.component';
import { PostDocenteComponent } from './screens/post-docente/post-docente.component';
import { ListDocentesScreenComponent } from './screens/list-docentes-screen/list-docentes-screen.component';
import { DeleteDocenteModalComponent } from './modals/delete-docente-modal/delete-docente-modal.component';
import { EditarDocenteModalComponent } from './modals/editar-docente-modal/editar-docente-modal.component';
import { PostMateriaScreenComponent } from './screens/post-materia-screen/post-materia-screen.component';
import { ListMateriasScreenComponent } from './screens/list-materias-screen/list-materias-screen.component';
import { PMateriaScreenComponent } from './screens/p-materia-screen/p-materia-screen.component';
import { EditarMateriaModalComponent } from './modals/editar-materia-modal/editar-materia-modal.component';
import { EliminarMateriaModalComponent } from './modals/eliminar-materia-modal/eliminar-materia-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    HeaderAppComponent,
    LeftsideBarComponent,
    AlumnosScreenComponent,
    MateriasScreenComponent,
    DocentesScreenComponent,
    PostAlumno2Component,
    ListAlumnosScreenComponent,
    PAlumnoScreenComponent,
    DeleteAlumnoModalComponent,
    EditarAlumnoModalComponent,
    PostDocenteComponent,
    ListDocentesScreenComponent,
    DeleteDocenteModalComponent,
    EditarDocenteModalComponent,
    PostMateriaScreenComponent,
    ListMateriasScreenComponent,
    PMateriaScreenComponent,
    EditarMateriaModalComponent,
    EliminarMateriaModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatDialogModule,
    NgxMaterialTimepickerModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
