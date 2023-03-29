import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { SesionService } from "src/app/services/sesion.service";
import { Curso } from "src/app/models/curso";
import { Sesion } from "src/app/models/sesion";
import { CursosService } from "../../../services/cursos.service";
import { EditarCursoComponent } from "../../../components/editar-curso/editar-curso.component";
import { Store } from "@ngrx/store";
import {
  cargarCursos,
  eliminarCurso,
} from "src/app/state/cursos/cursos-state.actions";
import {
  selectCargandoCursos,
  selectCursosCargados,
} from "src/app/state/cursos/cursos-state.selectors";
import { CursoState } from "src/app/models/curso.state";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-lista-cursos",
  templateUrl: "./lista-cursos.component.html",
  styleUrls: ["./lista-cursos.component.css"],
})
export class ListaCursosComponent implements OnInit {
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  sesion$!: Observable<Sesion>;
  cargando$!: Observable<Boolean>;

  constructor(
    private cursoService: CursosService,
    private sesion: SesionService,
    private dialog: MatDialog,
    private store: Store<CursoState>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.cargando$ = this.store.select(selectCargandoCursos);
    this.store.dispatch(cargarCursos());
    this.cursos$ = this.store.select(selectCursosCargados);
    this.sesion$ = this.sesion.obtenerSesion();
  }

  eliminarCurso(curso: Curso) {
    this.snackBar.open(`${curso.nombre} eliminado satisfactoriamente`);
    this.store.dispatch(eliminarCurso({ curso: curso }));
  }

  abrirDialog(curso: Curso) {
    this.dialog
      .open(EditarCursoComponent, {
        data: curso,
      })
      .afterClosed()
      .subscribe((curso: Curso) => {
        this.snackBar.open(`${curso.nombre} editado satisfactoriamente`);
        this.cursos$ = this.cursoService.obtenerCursos();
      });
  }
}
