const expect = require("expect");

const addFiltersObject = require("./problem").addFilters;
const clearFiltersObject = require("./problem").clearFilters;
const deleteFiltersObject = require("./problem").deleteFilters;
const { addFilters, deleteFilters, clearFilters } = require("./map");

describe("Map 테스트", () => {
  it("객체에 값을 추가할 수 있다 addFiltersObject()", () => {
    const filters = {
      color: "brown",
    };
    addFiltersObject(filters, "size", "large");
    expect(filters.size).toEqual("large");
  });

  it("객체에 값을 제거할 수 있다 deleteFiltersObject()", () => {
    const filters = {
      color: "red",
      size: "medium",
    };
    deleteFiltersObject(filters, "color");
    expect(filters).toEqual({
      size: "medium",
    });
  });

  it("객체를 초기화 할 수 있다 clearFiltersObject()", () => {
    const filters = {
      color: "dark",
      size: "huge",
    };
    const result = clearFiltersObject(filters);
    expect(result).toEqual({});
  });

  it("맵에 값을 추가할 수 있다 addFilters()", () => {
    const filters = new Map();
    filters.set("size", "large");
    addFilters(filters, "color", "black");
    expect(filters).toEqual(
      new Map().set("size", "large").set("color", "black")
    );
    expect(filters.get("color")).toEqual("black");
  });

  it("맵에 값을 제거할 수 있다 deleteFilters()", () => {
    const filters = new Map();
    filters.set("size", "large").set("color", "red");
    deleteFilters(filters, "size");
    expect(filters).toEqual(new Map().set("color", "red"));
  });

  it("맵을 초기화 할 수 있다 clearFilters()", () => {
    const filters = new Map();
    filters.set("size", "large").set("color", "red");
    clearFilters(filters);
    expect(filters).toEqual(new Map());
  });
});
