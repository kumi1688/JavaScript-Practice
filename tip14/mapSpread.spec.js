const expect = require("expect");
const getObject = require("./object").getAppliedFilters;
const getSortedObject = require("./object").getSortedAppliedFilters;
const getIterate = require("./iterate").getAppliedFilters;
const getSortIterate = require("./iterate").getSortedAppliedFilters;
const { getAppliedFilters, getSortedAppliedFilters } = require("./mapSpread");

describe("객체에서 가져오기", () => {
  it("객체에서 키-값 쌍을 가져올 수 있다", () => {
    const filters = {
      색상: "검정색",
      견종: "래브라도레트리버",
    };

    expect(getObject(filters)).toEqual(
      "선택한 조건은 색상:검정색, 견종:래브라도레트리버 입니다"
    );
  });

  it("객체에서 정렬된 키-값 쌍을 가져올 수 있다", () => {
    const filters = {
      색상: "검정색",
      견종: "래브라도레트리버",
    };
    expect(getSortedObject(filters)).toEqual(
      "선택한 조건은 견종:래브라도레트리버, 색상:검정색 입니다"
    );
  });
});

describe("map iterate", () => {
  it("객체에서 키-값 쌍을 가져올 수 있다", () => {
    const filters = new Map()
      .set("색상", "검정색")
      .set("견종", "래브라도레트리버");

    expect(getIterate(filters)).toEqual(
      "선택한 조건은 색상:검정색, 견종:래브라도레트리버 입니다"
    );
  });

  it("객체에서 정렬된 키-값 쌍을 가져올 수 있다", () => {
    const filters = new Map()
      .set("색상", "검정색")
      .set("견종", "래브라도레트리버");

    expect(getSortIterate(filters)).toEqual(
      "선택한 조건은 견종:래브라도레트리버, 색상:검정색 입니다"
    );
  });
});

describe("Map 객체 펼침", () => {
  it("객체에서 키-값 쌍을 가져올 수 있다", () => {
    const filters = new Map()
      .set("색상", "검정색")
      .set("견종", "래브라도레트리버");

    expect(getAppliedFilters(filters)).toEqual(
      "선택한 조건은 색상:검정색, 견종:래브라도레트리버 입니다"
    );
  });

  it("객체에서 정렬된 키-값 쌍을 가져올 수 있다", () => {
    const filters = new Map()
      .set("색상", "검정색")
      .set("견종", "래브라도레트리버");

    expect(getSortedAppliedFilters(filters)).toEqual(
      "선택한 조건은 견종:래브라도레트리버, 색상:검정색 입니다"
    );
  });
});
