import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Observable } from "rxjs";

import { CursosFeaturesEffects } from "./cursos-state.effects";

describe("CursosFeaturesEffects", () => {
  let actions$: Observable<any>;
  let effects: CursosFeaturesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CursosFeaturesEffects, provideMockActions(() => actions$)],
    });
    effects = TestBed.inject(CursosFeaturesEffects);
  });
  it("should be created", () => {
    expect(effects).toBeTruthy();
  });
});
