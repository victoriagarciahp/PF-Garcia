import { cursosReducer, initialState } from "./cursos-state.reducer";

describe("CursosFeatures Reducer", () => {
  describe("an unknown action", () => {
    it("should return the previous state", () => {
      const action = {} as any;

      const result = cursosReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
