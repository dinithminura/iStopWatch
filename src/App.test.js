import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

jest.useFakeTimers();

const getTimeText = () => {
  const minutes = screen.getByTestId('minutes').textContent;
  const seconds = screen.getByTestId('seconds').textContent;
  const milliseconds = screen.getByTestId('milliseconds').textContent;
  return `${minutes}${seconds}${milliseconds}`;
};

test('initial render shows 00:00.00', () => {
  render(<App />);
  expect(getTimeText()).toBe('00:00.00');
});
