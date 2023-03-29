import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { CursoState } from "src/app/models/curso.state";
import { CursosService } from "src/app/services/cursos.service";
import { cargarCursos } from "src/app/state/cursos/cursos-state.actions";

@Component({
  selector: "app-cursos-inicio",
  templateUrl: "./cursos-inicio.component.html",
  styleUrls: ["./cursos-inicio.component.css"],
})
export class CursosInicioComponent implements OnInit {
  constructor(
    private store: Store<CursoState>,
    private cursoService: CursosService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(cargarCursos());
  }
}
