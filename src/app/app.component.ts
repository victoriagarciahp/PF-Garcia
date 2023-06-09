import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { SesionService } from "./services/sesion.service";
import { Sesion } from "./models/sesion";
import { Store } from "@ngrx/store";
import { Usuario } from "./models/usuario";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  sesion$!: Observable<Sesion>;

  constructor(private router: Router, private sesion: SesionService) {}

  ngOnInit(): void {
    this.sesion$ = this.sesion.obtenerSesion();
  }

  redigirInicio() {
    this.router.navigate(["inicio"]);
  }

  logout() {
    let sesionLogout: Sesion = {
      sesionActiva: false,
      usuarioActivo: undefined,
    };
    this.sesion.logout(sesionLogout);
    this.router.navigate(["auth/login"]);
  }
}
