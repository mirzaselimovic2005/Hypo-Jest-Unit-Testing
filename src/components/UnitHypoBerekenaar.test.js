import React from "react";
import { render, screen } from "@testing-library/react";
import HypoBerekenaar, {
  isInvalidPostcode,
  studentenschuld,
  calculateMaxHypotheek,
} from "./HypoBerekenaar";

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

describe('hypotheek met partner', () => {
  it('returned true als verwachte PR resultaat klopt van de 2 inkomens', () => {
    const inkomen = 50000;
    const inkomen2 = 20000;
    const studentenschuld = false;
    const expectedMaxHypotheek = 382500;

    const result = calculateMaxHypotheek(inkomen, inkomen2, studentenschuld);
    
    expect(result).toBe(expectedMaxHypotheek);
  });
});

describe('hypotheek zonder partner', () => {
  it('returned true als verwachte PR resultaat klopt van de 1 inkomen', () => {
    const inkomen = 50000;
    const inkomen2 = 0;
    const studentenschuld = false;
    const expectedMaxHypotheek = 382500;

    const result = calculateMaxHypotheek(inkomen, inkomen2, studentenschuld);
    
    expect(result).toBe(expectedMaxHypotheek);
  });
});
