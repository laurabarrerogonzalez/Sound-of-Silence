// import { render, screen, fireEvent } from '@testing-library/react'
// import Navbar from './Navbar'
// import { test } from 'vitest'


// render(<Navbar />)
// fireEvent.click(screen.getByText('Home'))
// expect(screen.getByText('Home').className).toContain('active')

// const handleLogout = jest.fn()
// render(<Navbar handleLogout={handleLogout} />)
// fireEvent.click(screen.getByText('Log out'))
// expect(handleLogout).toHaveBeenCalled()

// test ('incrementa el valor cuando pulso el botón', () => {
//     render(<Navbar />);
//     const countElement = screen.getByText(/Home/i);
//     fireEvent.click(countElement);
//   })



import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar'
import { test } from 'vitest'

test ('Check that the Navbar home button redirects correctly.', () => {
    render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
    );
    const countElement = screen.getByText(/Home/i);
    fireEvent.click(countElement);
  })