import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material.module";
import { CursosRountingModule } from "./alumnos-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AgregarAlumnoComponent } from "src/app/routes/alumnos/agregar-alumno/agregar-alumno.component";
import { ListaAlumnoComponent } from "src/app/routes/alumnos/list-alumnos/list-alumnos.component";
import { EditarAlumnoComponent } from "../../components/editar-alumno/editar-alumno.component";
import { AlumnoService } from "src/app/services/alumno.service";
import { StyleDirective } from "src/app/directives/style.directive";
import { StyleNoteDirective } from "src/app/directives/style-note.directive";
import { EffectsModule } from "@ngrx/effects";
import { alumnosEffects } from "../../state/alumnos/alumnos.effects";
import { StoreModule } from "@ngrx/store";
import {
  alumnosFeatureKey,
  alumnosReducer,
} from "src/app/state/alumnos/alumnos.reducer";
import { SharedModule } from "../shared-module/shared.module";

@NgModule({
  declarations: [
    AgregarAlumnoComponent,
    ListaAlumnoComponent,
    EditarAlumnoComponent,
    StyleDirective,
    StyleNoteDirective,
  ],
  imports: [
    CommonModule,
    CursosRountingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(alumnosFeatureKey, alumnosReducer),
    EffectsModule.forFeature([alumnosEffects]),
  ],
  providers: [AlumnoService],
})
export class AlumnosModule {}
