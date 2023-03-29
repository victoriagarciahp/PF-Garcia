import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NotePipe } from "src/app/pipes/note.pipe";
import { MaterialModule } from "../../material.module";

@NgModule({
  declarations: [NotePipe],
  imports: [ReactiveFormsModule, MaterialModule, HttpClientModule],
  exports: [ReactiveFormsModule, MaterialModule, HttpClientModule, NotePipe],
})
export class SharedModule {}
