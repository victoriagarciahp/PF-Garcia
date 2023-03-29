import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material.module';
import { AlumnoService } from '../../services/alumno.service';
import { EditarAlumnoComponent } from './editar-alumno.component';

describe('EditarAlumnosComponent', () => {
  let component: EditarAlumnoComponent;
  let fixture: ComponentFixture<EditarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarAlumnoComponent],
      imports: [
        HttpClientModule,
        MaterialModule,
        RouterTestingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [AlumnoService],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
