import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "note",
})
export class NotePipe implements PipeTransform {
  transform(aprobado: boolean, ...args: any[]): string {
    return aprobado ? args[0] : args[1];
  }
}
