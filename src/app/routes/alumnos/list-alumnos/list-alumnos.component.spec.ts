import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MaterialModule } from "src/app/material.module";
import { AlumnoService } from "../../../services/alumno.service";
import { ListaAlumnoComponent } from "./list-alumnos.component";

describe("ListaAlumnoComponent", () => {
  let component: ListaAlumnoComponent;
  let fixture: ComponentFixture<ListaAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaAlumnoComponent],
      imports: [HttpClientModule, MaterialModule],
      providers: [AlumnoService],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
