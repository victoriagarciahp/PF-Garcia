import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Curso } from "src/app/models/curso";
import { env } from "src/environment/environment";

@Injectable()
export class CursosService {
  constructor(private http: HttpClient) {}

  obtenerCursos(): Observable<Curso[]> {
    return this.http
      .get<Curso[]>(`${env.apiURL}/api/v1/curso`, {
        headers: new HttpHeaders({
          "content-type": "application/json",
          encoding: "UTF-8",
        }),
      })
      .pipe(catchError(this.capturarError));
  }

  agregarCurso(curso: Curso): Observable<Curso> {
    return this.http
      .post<Curso>(`${env.apiURL}/api/v1/curso`, curso, {
        headers: new HttpHeaders({
          encoding: "UTF-8",
        }),
      })
      .pipe(catchError(this.capturarError));
  }

  editarCurso(curso: Curso): Observable<Curso> {
    return this.http
      .put<Curso>(`${env.apiURL}/api/v1/curso/${curso.id}`, curso)
      .pipe(catchError(this.capturarError));
  }

  eliminarCurso(curso: Curso): Observable<Curso> {
    return this.http
      .delete<Curso>(`${env.apiURL}/api/v1/curso/${curso.id}`)
      .pipe(catchError(this.capturarError));
  }

  private capturarError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      alert(`Hubo un error :${error.message}`);
    } else {
      alert(`Hubo un error: ${error.message}`);
    }

    return throwError(() => new Error("Error en el procesamiento de cursos"));
  }
}
