import React from "react";
import { render, screen } from "@testing-library/react";
import HypoBerekenaar, {
  isInvalidPostcode,
  studentenschuld,
  calculateMaxHypotheek,
  calculateRente,
} from "../components/HypoBerekenaar";

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

describe("hypotheek met partner", () => {
  it("returned true als verwachte PR resultaat klopt van de 2 inkomens", () => {
    const inkomen = 50000;
    const inkomen2 = 20000;
    const studentenschuld = false;
    const expectedMaxHypotheek = 382500;

    const result = calculateMaxHypotheek(inkomen, inkomen2, studentenschuld);

    expect(result).toBe(expectedMaxHypotheek);
  });
});

describe("hypotheek zonder partner", () => {
  it("returned true als verwachte PR resultaat klopt van de 1 inkomen", () => {
    const inkomen = 50000;
    const inkomen2 = 0;
    const studentenschuld = false;
    const expectedMaxHypotheek = 382500;

    const result = calculateMaxHypotheek(inkomen, inkomen2, studentenschuld);

    expect(result).toBe(expectedMaxHypotheek);
  });
});

describe("calculateRente unit test", () => {
  test("return 0.2 voor renteperiode 1", () => {
    const renteperiode = "1";
    const result = calculateRente(renteperiode);
    expect(result).toBe(0.02);
  });

  test("return 0.3 voor renteperiode 5", () => {
    const renteperiode = "5";
    const result = calculateRente(renteperiode);
    expect(result).toBe(0.03);
  });

  test("return 0.035 voor renteperiode 10", () => {
    const renteperiode = "10";
    const result = calculateRente(renteperiode);
    expect(result).toBe(0.035);
  });

  test("return 0.045 voor renteperiode 20", () => {
    const renteperiode = "20";
    const result = calculateRente(renteperiode);
    expect(result).toBe(0.045);
  });

  test("return 0.05 voor renteperiode 30", () => {
    const renteperiode = "30";
    const result = calculateRente(renteperiode);
    expect(result).toBe(0.05);
  });

  test("return 0.0 voor onbekend periode", () => {
    const renteperiode = "15";
    const result = calculateRente(renteperiode);
    expect(result).toBe(0.0);
  });
});
