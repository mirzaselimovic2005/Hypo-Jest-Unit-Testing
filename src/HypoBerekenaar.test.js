import React from 'react';
import { render, screen } from '@testing-library/react';
import HypoBerekenaar from './HypoBerekenaar';
import { calcHypotheek } from './HypoBerekenaar';


describe('calcHypotheek function', () => {
  it('should calculate mortgage details correctly when postcode is valid', () => {
    // mock functies en props
    const setmaxLeen = jest.fn();
    const setmaandelijks = jest.fn();
    const settRente = jest.fn();
    const settbetaling = jest.fn();
    const setError = jest.fn();
    const inkomen = 50000;
    const inkomen2 = 30000;
    const renteperiode = 10;
    const studentenschuld = false;
    const postcode = '1234';

    // calcHypotheek call
    calcHypotheek (
      inkomen,
      inkomen2,
      renteperiode,
      studentenschuld,
      postcode,
      setmaxLeen,
      setmaandelijks,
      settRente,
      settbetaling,
      setError
    );

    // verwachte resultaten
    expect(setmaxLeen).toHaveBeenCalledWith(expect.any(Number));
    expect(setmaandelijks).toHaveBeenCalledWith(expect.any(Number));
    expect(settRente).toHaveBeenCalledWith(expect.any(Number));
    expect(settbetaling).toHaveBeenCalledWith(expect.any(Number));
    expect(setError).toHaveBeenCalledWith(null);
  });

//   it('Verkeerde postcode input', () => {
//     // mocken functies en props
//     const setmaxLeen = jest.fn();
//     const setmaandelijks = jest.fn();
//     const settRente = jest.fn();
//     const settbetaling = jest.fn();
//     const setError = jest.fn();
//     const inkomen = 50000;
//     const inkomen2 = 30000;
//     const renteperiode = 10;
//     const studentenschuld = false;
//     const postcode = '1234';

//     // calcHypotheek call
//     calcHypotheek(
//       inkomen,
//       inkomen2,
//       renteperiode,
//       studentenschuld,
//       postcode,
//       setmaxLeen,
//       setmaandelijks,
//       settRente,
//       settbetaling,
//       setError
//     );

//     expect(setmaxLeen).toHaveBeenCalledWith(0);
//     expect(setmaandelijks).toHaveBeenCalledWith(0);
//     expect(settRente).toHaveBeenCalledWith(0);
//     expect(settbetaling).toHaveBeenCalledWith(0);
//     expect(setError).toHaveBeenCalledWith('Deze postcode kan niet');
//   });

});
