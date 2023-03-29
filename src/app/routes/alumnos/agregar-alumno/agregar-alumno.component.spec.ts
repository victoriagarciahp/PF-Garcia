import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "src/app/material.module";
import { AlumnoService } from "../../../services/alumno.service";
import { AgregarAlumnoComponent } from "./agregar-alumno.component";

describe("AgregarAlumnoComponent", () => {
  let component: AgregarAlumnoComponent;
  let fixture: ComponentFixture<AgregarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarAlumnoComponent],
      providers: [AlumnoService],
      imports: [
        HttpClientModule,
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
