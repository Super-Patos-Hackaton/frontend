import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import RecoveryAuthForm from './recoveryAuthForm';

describe('RecoveryAuthForm', () => {
  it('renders the form component', () => {
    render(<RecoveryAuthForm />);

    const form = screen.getByTestId('recovery-form');
    const email = screen.getByTestId('email-input-test');
    const submitButton = screen.getByTestId('submit-button-test');

    expect(form).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
