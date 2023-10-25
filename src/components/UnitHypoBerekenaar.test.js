import React from "react";
import { render } from "@testing-library/react";
import HypoBerekenaar from "./HypoBerekenaar";
import { isInvalidPostcode } from "./HypoBerekenaar";
import { studentenschuld } from "./HypoBerekenaar";

describe("Postcode niet mogelijk", () => {
  it("returned true als postcode niet mogelijk is", () => {
    expect(isInvalidPostcode("9679")).toBe(true);
    expect(isInvalidPostcode("9681")).toBe(true);
    expect(isInvalidPostcode("9682")).toBe(true);
  });
});

describe("studentenschuld aan", () => {
  it("returned true als studentenschuld aan is gevinkt", () => {
    studentenschuld.studentenschuld = jest.fn(() => true);
    const result = studentenschuld();
    expect(result).toBe(true);
  });
});



