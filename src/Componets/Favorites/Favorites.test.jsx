// import { describe, it, expect, vi } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import Favorites from './Favorites';

// describe('Favorites', () => {
//   it('should render correctly', () => {
//     render(<Favorites />);
//     expect(screen.getByText('Your favorite files:')).toBeInTheDocument();
//   });
// });

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Favorites from './Favorites';

describe('Favorites', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <Favorites />
      </BrowserRouter>
    );
    expect(screen.getByText('Your favorite files:')).toBeInTheDocument();
  });
});

