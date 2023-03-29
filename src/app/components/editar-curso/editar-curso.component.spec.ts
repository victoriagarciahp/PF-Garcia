import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AlumnoService } from 'src/app/services/alumno.service';
import { MaterialModule } from 'src/app/material.module';
import { CursosModule } from '../../modules/cursos-module/cursos.module';
import { CursosService } from '../../services/cursos.service';

import { EditarCursoComponent } from './editar-curso.component';

describe('EditarCursoComponent', () => {
  let component: EditarCursoComponent;
  let fixture: ComponentFixture<EditarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarCursoComponent],
      providers: [CursosService],
      imports: [
        HttpClientModule,
        MaterialModule,
        RouterTestingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
