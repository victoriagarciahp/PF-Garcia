import * as fromCursosState from "./cursos-state.reducer";
import { selectCursosState } from "./cursos-state.selectors";

describe("CursosFeatures Selectors", () => {
  it("should select the feature state", () => {
    const result = selectCursosState({
      [fromCursosState.cursosFeatureKey]: {},
    });
  });
});
