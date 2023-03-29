import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Curso } from "src/app/models/curso";
import { CursoState } from "src/app/models/curso.state";
import { agregarCurso } from "src/app/state/cursos/cursos-state.actions";
import { CursosService } from "../../../services/cursos.service";

@Component({
  selector: "app-agregar-curso",
  templateUrl: "./agregar-curso.component.html",
  styleUrls: ["./agregar-curso.component.css"],
})
export class AgregarCursoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private router: Router,
    private cursoService: CursosService,
    private store: Store<CursoState>
  ) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      id: new FormControl("", Validators.required),
      inscripcionAbierta: new FormControl(false, Validators.required),
      nombre: new FormControl("", Validators.required),
      profesor: new FormControl("", Validators.required),
      img: new FormControl("", Validators.required),
    });
  }

  agregarCurso() {
    let curso: Curso = {
      id: this.formulario.value.id,
      nombre: this.formulario.value.nombre,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      profesor: this.formulario.value.profesor,
      img: this.formulario.value.img,
    };
    this.store.dispatch(agregarCurso({ curso: curso }));
  }
}
