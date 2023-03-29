import { createReducer, on } from "@ngrx/store";
import { Curso } from "../../models/curso";
import * as CursoStateActions from "./cursos-state.actions";

export const cursosFeatureKey = "cursosFeatures";

export interface CursoState {
  cargando: boolean;
  cursos: Curso[];
}

export const initialState: CursoState = {
  cargando: false,
  cursos: [],
};

export const cursosReducer = createReducer(
  initialState,
  on(CursoStateActions.cargarCursos, (state) => {
    return { ...state, cargando: true };
  }),
  on(CursoStateActions.cursosCargados, (state, { cursos }) => {
    return { ...state, cargando: false, cursos };
  }),
  on(CursoStateActions.agregarCurso, (state, { curso: Curso }) => {
    return state;
  }),
  on(CursoStateActions.editarCurso, (state, { curso: Curso }) => {
    return state;
  }),
  on(CursoStateActions.eliminarCurso, (state, { curso: Curso }) => {
    return state;
  })
);
