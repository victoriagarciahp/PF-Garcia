import { NgModule } from '@angular/core';
import { InicioComponent } from '../../components/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [InicioComponent],
  imports: [HttpClientModule, MaterialModule],
  exports: [HttpClientModule],
})
export class CoreModule {}
