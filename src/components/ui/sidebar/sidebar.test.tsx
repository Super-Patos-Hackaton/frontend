import { fireEvent, render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { Sidebar } from '.';

describe('Sidebar Component', () => {
  it('should render the Sidebar component', () => {
    render(
      <div>
        <Sidebar navLinks={<button>Hello</button>} />
      </div>
    );

    const logo = screen.getByAltText(/Desafios do Pato - Logo/i);
    const title = screen.getByRole('heading', {
      level: 1,
      name: /Desafios do Pato/i,
    });

    expect(title).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });

  it('should collapse the sidebar when user clicks the toggle button', () => {
    render(<Sidebar navLinks={<button>Hello</button>} />);

    const button = screen.getByTestId('sidebar-toggle');
    const container = screen.getByTestId('container');

    fireEvent.click(button);

    expect(container).toHaveClass('w-[76px]');
  });

  it('should open the sidebar when user clicks the toggle button', () => {
    render(<Sidebar navLinks={<button>Hello</button>} />);

    const button = screen.getByTestId('sidebar-toggle');
    const container = screen.getByTestId('container');

    fireEvent.click(button);

    expect(container).toHaveClass('w-80');
  });
});
