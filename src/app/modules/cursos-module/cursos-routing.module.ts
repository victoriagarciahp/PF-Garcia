import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminGuard } from "../../guards/admin.guard";
import { SesionGuard } from "../../guards/sesion.guard";
import { AgregarCursoComponent } from "../../routes/cursos/agregar-curso/agregar-curso.component";
import { EditarCursoComponent } from "../../components/editar-curso/editar-curso.component";
import { ListaCursosComponent } from "../../routes/cursos/lista-cursos/lista-cursos.component";
import { CursosInicioComponent } from "src/app/components/cursos-inicio/cursos-inicio.component";

const routes: Routes = [
  {
    path: "",
    component: CursosInicioComponent,
    canActivateChild: [SesionGuard],
    children: [
      { path: "listar", component: ListaCursosComponent },
      {
        path: "editar",
        component: EditarCursoComponent,
        canActivate: [AdminGuard],
      },
      {
        path: "agregar",
        component: AgregarCursoComponent,
        canActivate: [AdminGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRountingModule {}
