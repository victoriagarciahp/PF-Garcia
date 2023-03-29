import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Curso } from "src/app/models/curso";
import { CursoState } from "src/app/models/curso.state";
import { editarCurso } from "src/app/state/cursos/cursos-state.actions";
import { CursosService } from "../../services/cursos.service";

@Component({
  selector: "app-editar-curso",
  templateUrl: "./editar-curso.component.html",
  styleUrls: ["./editar-curso.component.css"],
})
export class EditarCursoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private cursoService: CursosService,
    private router: Router,
    private dialogRef: MatDialogRef<EditarCursoComponent>,
    private store: Store<CursoState>,
    @Inject(MAT_DIALOG_DATA) public curso: Curso
  ) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      id: new FormControl(this.curso.id),
      nombre: new FormControl(this.curso.nombre),
      profesor: new FormControl(this.curso.profesor),
      inscripcionAbierta: new FormControl(this.curso.inscripcionAbierta),
      img: new FormControl(this.curso.img),
    });
  }

  editarCurso() {
    let curso: Curso = {
      id: this.curso.id,
      nombre: this.formulario.value.nombre,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      profesor: this.formulario.value.profesor,
      img: this.formulario.value.img,
    };
    this.store.dispatch(editarCurso({ curso: curso }));
    this.dialogRef.close(curso);
  }
}
