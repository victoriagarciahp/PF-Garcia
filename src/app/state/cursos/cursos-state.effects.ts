import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs";
import { Curso } from "src/app/models/curso";
import { CursosService } from "src/app/services/cursos.service";
import {
  agregarCurso,
  cargarCursos,
  cursosCargados,
  editarCurso,
  eliminarCurso,
} from "./cursos-state.actions";

@Injectable()
export class cursosEffects {
  cargarCurso$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(cargarCursos),
      concatMap(() => {
        return this.cursos
          .obtenerCursos()
          .pipe(map((c: Curso[]) => cursosCargados({ cursos: c })));
      })
    );
  });
  agregarCurso$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(agregarCurso),
      concatMap(({ curso }) => {
        return this.cursos.agregarCurso(curso).pipe(
          map((c: Curso) => {
            this.snackBar.open(`${curso.nombre} agregado satisfactoriamente`);
            this.router.navigate(["cursos/listar"]);
            return cargarCursos();
          })
        );
      })
    );
  });
  eliminarCurso$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(eliminarCurso),
      concatMap(({ curso }) => {
        return this.cursos.eliminarCurso(curso).pipe(
          map((curso: Curso) => {
            this.snackBar.open(`${curso.nombre} eliminado satisfactoriamente`);
            this.router.navigate(["cursos/listar"]);
            return cargarCursos();
          })
        );
      })
    );
  });
  editarCurso$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editarCurso),
      concatMap(({ curso }) => {
        return this.cursos.editarCurso(curso).pipe(
          map((curso: Curso) => {
            return cargarCursos();
          })
        );
      })
    );
  });
  constructor(
    private cursos: CursosService,
    private actions$: Actions,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
}
