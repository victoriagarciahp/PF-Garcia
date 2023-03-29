import { createAction, props } from "@ngrx/store";
import { Alumno } from "src/app/models/alumno";

export const cargarAlumnos = createAction("[AlumnoState] Cargar Alumnos");
export const alumnosCargados = createAction(
  "[AlumnoState] Alumnos cargados",
  props<{ alumnos: Alumno[] }>()
);
export const agregarAlumno = createAction(
  "[AlumnoState] Agregar alumno",
  props<{ alumno: Alumno }>()
);
export const editarAlumno = createAction(
  "[AlumnoState] Editar alumno",
  props<{ alumno: Alumno }>()
);
export const eliminarAlumno = createAction(
  "[AlumnoState] Eliminar alumno",
  props<{ alumno: Alumno }>()
);
