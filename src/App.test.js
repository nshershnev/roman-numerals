import { render, screen } from '@testing-library/react';
import App from './App';

test('renders convert button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /Convert/i });
  expect(buttonElement).toBeInTheDocument();
});
