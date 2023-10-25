import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HypoBerekenaar from "../components/HypoBerekenaar";

describe("HypoBerekenaar", () => {
  it("Hypotheek zonder partner", () => {
    const { getByText, getByTestId } = render(
      <HypoBerekenaar
        inkomen={8000}
        inkomen2={0}
        renteperiode={30}
        studentenschuld={false}
        postcode="1234"
      />
    );

    const maxLeenText = getByText("Maximaal te lenen bedrag: €34000.00");
    const maandelijksText = getByText("Maandelijkse betaling: €182.52");
    const tRenteText = getByText("Totaal betaalde rente: €31706.97");
    const tbetalingText = getByText("Totaal te betalen bedrag: €65706.97");

    expect(maxLeenText).toBeInTheDocument();
    expect(maandelijksText).toBeInTheDocument();
    expect(tRenteText).toBeInTheDocument();
    expect(tbetalingText).toBeInTheDocument();
  });
});

describe("HypoBerekenaar", () => {
  it("Hypotheek met partner", () => {
    const { getByText, getByTestId } = render(
      <HypoBerekenaar
        inkomen={3100}
        inkomen2={1600}
        renteperiode={30}
        studentenschuld={false}
        postcode="1234"
      />
    );

    const maxLeenText = getByText("Maximaal te lenen bedrag: €19975.00");
    const maandelijksText = getByText("Maandelijkse betaling: €107.23");
    const tRenteText = getByText("Totaal betaalde rente: €18627.84");
    const tbetalingText = getByText("Totaal te betalen bedrag: €38602.84");

    expect(maxLeenText).toBeInTheDocument();
    expect(maandelijksText).toBeInTheDocument();
    expect(tRenteText).toBeInTheDocument();
    expect(tbetalingText).toBeInTheDocument();
  });
});

describe("HypoBerekenaar", () => {
  it("Postcode gebied waar geen hypotheek voor verstrekt wordt", () => {
    const { getByText } = render(
      <HypoBerekenaar
        inkomen={0}
        inkomen2={0}
        renteperiode={30}
        studentenschuld={false}
        postcode="9679"
      />
    );

    const errorMessage = getByText("Deze postcode kan niet");
    expect(errorMessage).toBeInTheDocument();
  });
});

describe("HypoBerekenaar", () => {
  it("Studieschuld aan", () => {
    const { getByText } = render(
      <HypoBerekenaar
        inkomen={2000}
        inkomen2={3000}
        renteperiode={30}
        studentenschuld={true}
        postcode="1234"
      />
    );

    const maxLeenText = getByText("Maximaal te lenen bedrag: €15937.50");
    const maandelijksText = getByText("Maandelijkse betaling: €85.56");
    const tRenteText = getByText("Totaal betaalde rente: €14862.64");
    const tbetalingText = getByText("Totaal te betalen bedrag: €30800.14");

    expect(maxLeenText).toBeInTheDocument();
    expect(maandelijksText).toBeInTheDocument();
    expect(tRenteText).toBeInTheDocument();
    expect(tbetalingText).toBeInTheDocument();
  });
});
