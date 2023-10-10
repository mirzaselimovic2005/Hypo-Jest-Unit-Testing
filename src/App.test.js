import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the initial message', () => {
  render(<App />);
  const messageElement = screen.getByText(/vul uw gegevens in om de hypotheek te berekene/i);
  expect(messageElement).toBeInTheDocument();
});
