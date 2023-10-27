import { render, screen } from '@testing-library/react';
import BootstrapDefaultLayout from './index';
import { MemoryRouter } from 'react-router-dom';

test('Render the layout', () => {
    render(<MemoryRouter><BootstrapDefaultLayout/></MemoryRouter>);

    const menuSidebar = screen.queryByTestId('menu-sidebar');
    expect(menuSidebar).toBeInTheDocument();

    const titleNavbar = screen.queryByTestId('title-navbar');
    expect(titleNavbar).toBeInTheDocument();
});
