import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRountingModule } from "./app-rounting.module";
import { CoreModule } from "./modules/core-module/core.module";
import { SharedModule } from "./modules/shared-module/shared.module";
import { MaterialModule } from "./material.module";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { CursosService } from "./services/cursos.service";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AlumnoService } from "./services/alumno.service";
import { AuthModule } from "./auth/auth.module";
import { EffectsModule } from "@ngrx/effects";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRountingModule,
    CoreModule,
    MaterialModule,
    AuthModule,
    RouterModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
  ],
  providers: [CursosService, AlumnoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
