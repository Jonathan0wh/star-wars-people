import reducer, { initialState } from "../reducer";

describe("reducer: personDetail", () => {
  it("should return the initial state", () => {
    expect(
      reducer(initialState, { type: "personDetail/updatePersonDetail" })
    ).toEqual({
      name: "",
      birthYear: "",
      gender: "",
      filmIDs: [],
    });
  });

  it("should handle personDetail/updatePersonDetail", () => {
    expect(
      reducer(initialState, {
        type: "personDetail/updatePersonDetail",
        payload: {
          name: "test",
          birthYear: "11/11/1111",
          gender: "Male",
          filmIDs: ["1", "2", "3"],
        },
      })
    ).toEqual({
      name: "test",
      birthYear: "11/11/1111",
      gender: "Male",
      filmIDs: ["1", "2", "3"],
    });
  });
});
