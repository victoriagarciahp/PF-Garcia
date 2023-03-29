import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCursos from "./cursos-state.reducer";

export const selectCursosState = createFeatureSelector<fromCursos.CursoState>(
  fromCursos.cursosFeatureKey
);

export const selectCargandoCursos = createSelector(
  selectCursosState,
  (state: fromCursos.CursoState) => state.cargando
);

export const selectCursosCargados = createSelector(
  selectCursosState,
  (state: fromCursos.CursoState) => state.cursos
);
