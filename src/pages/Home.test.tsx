import { render, screen } from '@testing-library/react';
import { Home } from './Home';

describe('Home', () => {
  it('renders header title and introduction', () => {
    render(<Home />);

    expect(screen.getByText(/David Endersby/i)).toBeInTheDocument();
    expect(screen.getByText(/Hello! I am an Engineering Manager/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Architectural Photographer/i })).toBeInTheDocument();
  });
});
