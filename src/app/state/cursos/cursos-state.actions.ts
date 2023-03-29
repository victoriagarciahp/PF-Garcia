import { createAction, props } from "@ngrx/store";
import { Curso } from "../../models/curso";

export const cargarCursos = createAction("[CursoState] Cargar Cursos");
export const cursosCargados = createAction(
  "[CursoState] Cursos cargados",
  props<{ cursos: Curso[] }>()
);
export const agregarCurso = createAction(
  "[CursoState] Agregar curso",
  props<{ curso: Curso }>()
);
export const editarCurso = createAction(
  "[CursoState] Editar curso",
  props<{ curso: Curso }>()
);
export const eliminarCurso = createAction(
  "[CursoState] Eliminar Curso",
  props<{ curso: Curso }>()
);
