import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Alumno } from "src/app/models/alumno";
import { AlumnoState } from "src/app/models/alumno.state";
import { agregarAlumno } from "src/app/state/alumnos/alumnos.actions";
import { AlumnoService } from "../../../services/alumno.service";

@Component({
  selector: "app-agregar-alumno",
  templateUrl: "./agregar-alumno.component.html",
  styleUrls: ["./agregar-alumno.component.css"],
})
export class AgregarAlumnoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private router: Router,
    private alumnoService: AlumnoService,
    private store: Store<AlumnoState>
  ) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      index: new FormControl(1),
      nombre: new FormControl(""),
      apellido: new FormControl(""),
      curso: new FormControl(""),
      profesor: new FormControl(""),
      fechaInicio: new FormControl(new Date()),
      fechaFin: new FormControl(new Date()),
      notaActual: new FormControl(1),
      aprobado: new FormControl(false),
    });
  }

  agregarAlumno() {
    let alumno: Alumno = {
      index: this.formulario.value.index,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      curso: this.formulario.value.curso,
      profesor: this.formulario.value.profesor,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      notaActual: this.formulario.value.notaActual,
      aprobado: this.formulario.value.aprobado,
    };
    if (alumno.notaActual <= 5) {
      alumno.aprobado = false;
    }
    this.store.dispatch(agregarAlumno({ alumno: alumno }));
  }
}
