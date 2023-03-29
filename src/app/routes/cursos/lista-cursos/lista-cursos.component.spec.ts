import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MaterialModule } from "src/app/material.module";
import { CursosService } from "../../../services/cursos.service";

import { ListaCursosComponent } from "./lista-cursos.component";

describe("ListaCursosComponent", () => {
  let component: ListaCursosComponent;
  let fixture: ComponentFixture<ListaCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaCursosComponent],
      imports: [HttpClientModule, MaterialModule],
      providers: [CursosService],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
