import { AlumnoState } from "../models/alumno.state";
import { CursoState } from "../models/curso.state";

export interface AppState {
  cursos: CursoState;
  alumnos: AlumnoState;
}
