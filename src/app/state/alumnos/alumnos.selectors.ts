import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromAlumnos from "./alumnos.reducer";

export const selectAlumnosState =
  createFeatureSelector<fromAlumnos.AlumnoState>(fromAlumnos.alumnosFeatureKey);

export const selectCargandoAlumnos = createSelector(
  selectAlumnosState,
  (state: fromAlumnos.AlumnoState) => state.cargando
);

export const selectAlumnosCargados = createSelector(
  selectAlumnosState,
  (state: fromAlumnos.AlumnoState) => state.alumnos
);
