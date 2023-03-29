import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs/operators";
import { Alumno } from "src/app/models/alumno";
import { AlumnoService } from "src/app/services/alumno.service";
import {
  agregarAlumno,
  alumnosCargados,
  cargarAlumnos,
  editarAlumno,
  eliminarAlumno,
} from "./alumnos.actions";

@Injectable()
export class alumnosEffects {
  cargarAlumnos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(cargarAlumnos),
      concatMap(() => {
        return this.alumnos
          .obtenerAlumnos()
          .pipe(map((a: Alumno[]) => alumnosCargados({ alumnos: a })));
      })
    );
  });
  agregarAlumnos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(agregarAlumno),
      concatMap(({ alumno }) => {
        return this.alumnos.agregarAlumno(alumno).pipe(
          map((a: Alumno) => {
            this.snackBar.open(`${alumno.nombre} agregado satisfactoriamente`);
            this.router.navigate(["alumnos/listar"]);
            return cargarAlumnos();
          })
        );
      })
    );
  });
  eliminarAlumnos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(eliminarAlumno),
      concatMap(({ alumno }) => {
        return this.alumnos.eliminarAlumno(alumno).pipe(
          map((a: Alumno) => {
            this.router.navigate(["inicio"]);
            return cargarAlumnos();
          })
        );
      })
    );
  });
  editarAlumnos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editarAlumno),
      concatMap(({ alumno }) => {
        return this.alumnos.editarAlumno(alumno).pipe(
          map((a: Alumno) => {
            this.router.navigate(["alumnos/listar"]);
            return cargarAlumnos();
          })
        );
      })
    );
  });
  constructor(
    private alumnos: AlumnoService,
    private actions$: Actions,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
}
