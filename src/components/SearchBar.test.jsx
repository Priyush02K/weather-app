import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders search input and button', () => {
  render(<SearchBar onSearch={() => {}} />);
  expect(screen.getByPlaceholderText(/enter city name/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
});

test('calls onSearch when button is clicked', () => {
  const mockSearch = vi.fn();
  render(<SearchBar onSearch={mockSearch} />);

  const input = screen.getByPlaceholderText(/enter city name/i);
  fireEvent.change(input, { target: { value: 'Mumbai' } });

  const button = screen.getByRole('button', { name: /search/i });
  fireEvent.click(button);

  expect(mockSearch).toHaveBeenCalledWith('Mumbai');
});
