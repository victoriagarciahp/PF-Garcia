import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../models/alumno';

@Pipe({
  name: 'name',
})
export class NamePipe implements PipeTransform {
  transform(alumno: Alumno): string {
    return `${alumno.nombre} ${alumno.apellido}`;
  }
}
