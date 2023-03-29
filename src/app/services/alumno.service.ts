import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Alumno } from "../models/alumno";
import { env } from "src/environment/environment";

@Injectable()
export class AlumnoService {
  constructor(private http: HttpClient) {}

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.http
      .get<Alumno[]>(`${env.apiURL}/api/v1/alumno`, {
        headers: new HttpHeaders({
          "content-type": "application/json",
          encoding: "UTF-8",
        }),
      })
      .pipe(catchError(this.capturarError));
  }

  agregarAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http
      .post<Alumno>(`${env.apiURL}/api/v1/alumno`, alumno, {
        headers: new HttpHeaders({
          encoding: "UTF-8",
        }),
      })
      .pipe(catchError(this.capturarError));
  }

  editarAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http
      .put<Alumno>(`${env.apiURL}/api/v1/alumno/${alumno.index}`, alumno)
      .pipe(catchError(this.capturarError));
  }

  eliminarAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http
      .delete<Alumno>(`${env.apiURL}/api/v1/alumno/${alumno.index}`)
      .pipe(catchError(this.capturarError));
  }

  private capturarError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      alert(`Hubo un error del lado del cliente: ${error.message}`);
    } else {
      alert(`Hubo un error del lado del servidor: ${error.message}`);
    }
    return throwError(() => new Error("Error en el procesamiento de cursos"));
  }
}
