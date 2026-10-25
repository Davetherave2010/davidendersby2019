import { render, screen } from '@testing-library/react';
import { Home } from './Home';

describe('Home', () => {
  it('renders header title and introduction', () => {
    render(<Home />);

    expect(screen.getByText(/David Endersby/i)).toBeInTheDocument();
    expect(screen.getByText(/Hello! I'm Director of Product & Engineering/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /architectural photographer/i })).toHaveAttribute(
      'href',
      'https://www.instagram.com/davetherave2010',
    );
    expect(screen.getByRole('link', { name: 'Dex' })).toHaveAttribute('href', 'https://github.com/davekilleen/dex');
  });
});
