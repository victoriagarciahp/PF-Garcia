import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Alumno } from "src/app/models/alumno";
import { AlumnoState } from "src/app/models/alumno.state";
import { AlumnoService } from "src/app/services/alumno.service";
import { editarAlumno } from "src/app/state/alumnos/alumnos.actions";

@Component({
  selector: "app-editar-alumno",
  templateUrl: "./editar-alumno.component.html",
  styleUrls: ["./editar-alumno.component.css"],
})
export class EditarAlumnoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private alumnoService: AlumnoService,
    private router: Router,
    private dialogRef: MatDialogRef<EditarAlumnoComponent>,
    private store: Store<AlumnoState>,
    @Inject(MAT_DIALOG_DATA) public alumno: Alumno
  ) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      id: new FormControl(this.alumno.index),
      nombre: new FormControl(this.alumno.nombre),
      apellido: new FormControl(this.alumno.apellido),
      profesor: new FormControl(this.alumno.profesor),
      curso: new FormControl(this.alumno.curso),
      fechaInicio: new FormControl(this.alumno.fechaInicio),
      fechaFin: new FormControl(this.alumno.fechaFin),
      notaActual: new FormControl(this.alumno.notaActual),
      aprobado: new FormControl(this.alumno.aprobado),
    });
  }

  editarAlumno() {
    let alumno: Alumno = {
      index: this.alumno.index,
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
    this.store.dispatch(editarAlumno({ alumno }));
    this.dialogRef.close(alumno);
  }
}
