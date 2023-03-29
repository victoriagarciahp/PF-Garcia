import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AgregarCursoComponent } from "../../routes/cursos/agregar-curso/agregar-curso.component";
import { ListaCursosComponent } from "../../routes/cursos/lista-cursos/lista-cursos.component";
import { EditarCursoComponent } from "src/app/components/editar-curso/editar-curso.component";
import { CursosRountingModule } from "./cursos-routing.module";
import { CursosService } from "../../services/cursos.service";
import { ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/material.module";
import { CursosInicioComponent } from "src/app/components/cursos-inicio/cursos-inicio.component";
import { StoreModule } from "@ngrx/store";
import { cursosFeatureKey } from "src/app/state/cursos/cursos-state.reducer";
import { cursosReducer } from "src/app/state/cursos/cursos-state.reducer";
import { EffectsModule } from "@ngrx/effects";
import { cursosEffects } from "src/app/state/cursos/cursos-state.effects";
import { SharedModule } from "../shared-module/shared.module";

@NgModule({
  declarations: [
    AgregarCursoComponent,
    ListaCursosComponent,
    EditarCursoComponent,
    CursosInicioComponent,
  ],
  imports: [
    CommonModule,
    CursosRountingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(cursosFeatureKey, cursosReducer),
    EffectsModule.forFeature([cursosEffects]),
  ],
  providers: [CursosService],
})
export class CursosModule {}
