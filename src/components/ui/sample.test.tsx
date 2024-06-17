import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { Button } from './button';

describe('Button', () => {
	it('renders a button', () => {
		render(<Button>Test</Button>);

		expect(screen.getByText('Test')).toBeInTheDocument();
	});
});
