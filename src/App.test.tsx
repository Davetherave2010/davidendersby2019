import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the Home page and footer', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /David Endersby/i })).toBeInTheDocument();
    // Footer should render and show the Made with text
    expect(screen.getByText(/Made with/i)).toBeInTheDocument();
  });
});
