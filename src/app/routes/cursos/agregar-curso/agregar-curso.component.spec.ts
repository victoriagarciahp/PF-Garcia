import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlumnoService } from "src/app/services/alumno.service";
import { MaterialModule } from "src/app/material.module";
import { CursosService } from "../../../services/cursos.service";

import { AgregarCursoComponent } from "./agregar-curso.component";

describe("AgregarCursoComponent", () => {
  let component: AgregarCursoComponent;
  let fixture: ComponentFixture<AgregarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarCursoComponent],
      imports: [
        MaterialModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [CursosService],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("El formulario se mantiene invalido cuando dejamos campos sin rellenar", () => {
    const formulario = component.formulario;
    const profesor = formulario.controls["profesor"];
    profesor.setValue("Victor Ferreira");
    expect(formulario.invalid).toBeTrue();
  });

  it("El formulario se mantiene valido todos los campos contienen informacion", () => {
    const formulario = component.formulario;
    const id = formulario.controls["id"];
    const nombre = formulario.controls["nombre"];
    const profesor = formulario.controls["profesor"];
    const inscripcionAbierta = formulario.controls["inscripcionAbierta"];
    const img = formulario.controls["img"];
    id.setValue(12);
    nombre.setValue("Nest Js");
    profesor.setValue("Victor Ferreira");
    inscripcionAbierta.setValue(true);
    img.setValue("sdfdsfdsf");
    expect(formulario.valid).toBeTrue();
  });
  it("Debe existir un boton que diga 'Agregar'", () => {
    const boton = fixture.debugElement.query(By.css(".button"));
    const getInnerText = boton.nativeElement.innerText;
    expect(getInnerText).toEqual("Agregar");
  });
});
