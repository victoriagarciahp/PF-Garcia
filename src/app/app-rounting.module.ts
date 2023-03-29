import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SesionGuard } from "./guards/sesion.guard";
import { LoginComponent } from "./auth/components/login/login.component";
import { InicioComponent } from "./components/inicio/inicio.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "inicio", component: InicioComponent, canActivate: [SesionGuard] },
  {
    path: "cursos",
    loadChildren: () =>
      import("./modules/cursos-module/cursos.module").then(
        (modulo) => modulo.CursosModule
      ),
    canLoad: [SesionGuard],
  },
  {
    path: "alumnos",
    loadChildren: () =>
      import("./modules/alumnos-module/alumnos.module").then(
        (modulo) => modulo.AlumnosModule
      ),
    canLoad: [SesionGuard],
  },
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  { path: "**", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule {}
