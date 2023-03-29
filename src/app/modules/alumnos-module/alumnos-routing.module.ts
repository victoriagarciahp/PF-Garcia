import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminGuard } from "../../guards/admin.guard";
import { SesionGuard } from "../../guards/sesion.guard";
import { ListaAlumnoComponent } from "../../routes/alumnos/list-alumnos/list-alumnos.component";
import { EditarAlumnoComponent } from "../../components/editar-alumno/editar-alumno.component";
import { AgregarAlumnoComponent } from "../../routes/alumnos/agregar-alumno/agregar-alumno.component";
const routes: Routes = [
  {
    path: "",
    canActivateChild: [SesionGuard],
    children: [
      { path: "listar", component: ListaAlumnoComponent },
      {
        path: "editar",
        component: EditarAlumnoComponent,
        canActivate: [AdminGuard],
      },
      {
        path: "agregar",
        component: AgregarAlumnoComponent,
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
