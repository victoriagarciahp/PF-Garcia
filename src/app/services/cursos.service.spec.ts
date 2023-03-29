import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursosService } from './cursos.service';

describe('CursosService', () => {
  let service: CursosService;
  let httpClientSpy: { get: jasmine.Spy };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CursosService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('El servicio retorna un arreglo de datos mockeados', (done: DoneFn) => {
    const mockDatos: Curso[] = [
      {
        id: '11',
        nombre: 'Angular',
        profesor: 'Martina Fernandez',
        inscripcionAbierta: true,
        img: 'erewrwerewrew',
      },
    ];
    httpClientSpy.get.and.returnValue(of(mockDatos));
    service.obtenerCursos().subscribe((cursos: Curso[]) => {
      expect(cursos).toEqual(mockDatos);
      done();
    });
  });
  it('El servicio debe retornar que el largo de cursos es 1', (done: DoneFn) => {
    const mockDatos: Curso[] = [
      {
        id: '11',
        nombre: 'Angular',
        profesor: 'Martina Fernandez',
        inscripcionAbierta: true,
        img: 'erewrwerewrew',
      },
    ];
    httpClientSpy.get.and.returnValue(of(mockDatos));
    service.obtenerCursos().subscribe((cursos: Curso[]) => {
      expect(cursos.length).toEqual(1);
      done();
    });
  });
});
