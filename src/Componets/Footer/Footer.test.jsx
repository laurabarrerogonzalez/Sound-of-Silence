import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import '@testing-library/jest-dom'


describe('footer', () => {
    it('renders logo', () => {
      render(Footer());
      expect(screen.getByRole('img', { name: 'logo instagram' })).toBeInTheDocument();
    });
    it('renders copyright', () => {
      render(Footer());
      expect(screen.getByRole('img', { name: 'logo facebook' })).toBeInTheDocument();
    });
  });
