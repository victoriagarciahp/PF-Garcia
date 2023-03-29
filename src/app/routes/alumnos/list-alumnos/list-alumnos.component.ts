import { Component, OnDestroy, OnInit } from "@angular/core";
import { Alumno } from "src/app/models/alumno";
import { MatDialog } from "@angular/material/dialog";
import { AlumnoService } from "src/app/services/alumno.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { Sesion } from "src/app/models/sesion";
import { SesionService } from "src/app/services/sesion.service";
import { EditarAlumnoComponent } from "../../../components/editar-alumno/editar-alumno.component";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/state/app.state";
import {
  selectAlumnosCargados,
  selectCargandoAlumnos,
} from "src/app/state/alumnos/alumnos.selectors";
import {
  alumnosCargados,
  cargarAlumnos,
  eliminarAlumno,
} from "src/app/state/alumnos/alumnos.actions";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: "app-list",
  templateUrl: "./list-alumnos.component.html",
  styleUrls: ["./list-alumnos.component.css"],
})
export class ListaAlumnoComponent {
  alumnos!: Alumno[];
  alumnos$!: Observable<Alumno[]>;
  sesion$!: Observable<Sesion>;
  cargando$!: Observable<Boolean>;

  constructor(
    private alumnoService: AlumnoService,
    private router: Router,
    private sesion: SesionService,
    private dialog: MatDialog,
    private store: Store<AppState>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.cargando$ = this.store.select(selectCargandoAlumnos);
    this.store.dispatch(cargarAlumnos());
    this.alumnoService.obtenerAlumnos().subscribe((alumnos: Alumno[]) => {
      this.store.dispatch(alumnosCargados({ alumnos: alumnos }));
    });
    this.alumnos$ = this.store.select(selectAlumnosCargados);
    this.alumnos$ = this.alumnoService.obtenerAlumnos();
    this.sesion$ = this.sesion.obtenerSesion();
  }

  eliminarAlumno(alumno: Alumno) {
    this.snackBar.open(`alumno ${alumno.nombre} eliminado satisfactoriamente`);
    this.router.navigate(["alumnos/listar"]);
    this.store.dispatch(eliminarAlumno({ alumno: alumno }));
  }

  abrirDialog(alumno: Alumno) {
    this.dialog
      .open(EditarAlumnoComponent, {
        data: alumno,
      })
      .afterClosed()
      .subscribe((alumno: Alumno) => {
        this.snackBar.open(
          `alumno ${alumno.nombre} editado satisfactoriamente`
        );
        this.alumnos$ = this.alumnoService.obtenerAlumnos();
      });
  }
}
