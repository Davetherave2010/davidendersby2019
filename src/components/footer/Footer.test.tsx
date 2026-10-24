import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders social links with icons', () => {
    render(<Footer />);

    const links = [
      { alt: /Medium icon/i, href: 'https://www.medium.com/@daendersby', label: 'Medium' },
      { alt: /Github octocat/i, href: 'https://www.github.com/davetherave2010', label: 'GitHub' },
      { alt: /Instagram icon/i, href: 'https://www.instagram.com/davetherave2010', label: 'Instagram' },
      { alt: /500px icon/i, href: 'https://500px.com/p/Davetherave2010', label: '500px' },
      { alt: /Linkedin icon/i, href: 'https://www.linkedin.com/in/endersbydavid/', label: 'LinkedIn' },
      { alt: /Youtube icon/i, href: 'https://www.youtube.com/@davetherave2010', label: 'YouTube' }
    ];

    for (const { alt, href, label } of links) {
      const img = screen.getByAltText(alt);
      expect(img).toBeInTheDocument();
      const anchor = img.closest('a');
      expect(anchor).toHaveAttribute('href', href);
      expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
      expect(anchor).toHaveAttribute('aria-label');
      expect(anchor?.getAttribute('aria-label')).toMatch(/opens in new tab/i);
      if (label) {
        expect(anchor?.getAttribute('aria-label')).toMatch(new RegExp(label, 'i'));
      }
    }
  });

  it('renders copyright with current year', () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it('links the app version to its release', () => {
    vi.stubEnv('VITE_APP_VERSION', 'v1.2.3');
    render(<Footer />);
    const link = screen.getByRole('link', { name: /Release v1\.2\.3/ });
    expect(link).toHaveTextContent('v1.2.3');
    expect(link).toHaveAttribute('href', 'https://github.com/Davetherave2010/davidendersby2019/releases/tag/v1.2.3');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    vi.unstubAllEnvs();
  });

  it('shows a dev build without a link', () => {
    vi.stubEnv('VITE_APP_VERSION', '');
    render(<Footer />);
    expect(screen.getByText(/dev build/)).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /Release/ })).not.toBeInTheDocument();
    vi.unstubAllEnvs();
  });
});
