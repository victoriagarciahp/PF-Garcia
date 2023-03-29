import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Usuario } from "src/app/models/usuario";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      usuario: new FormControl("", [
        Validators.minLength(3),
        Validators.required,
      ]),
      contrasena: new FormControl("", [
        Validators.minLength(6),
        Validators.required,
      ]),
      esAdmin: new FormControl(false, Validators.required),
    });
  }

  login() {
    let usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      esAdmin: this.formulario.value.esAdmin,
    };
    this.loginService.login(usuario);
    this.router.navigate(["inicio"]);
  }
}
