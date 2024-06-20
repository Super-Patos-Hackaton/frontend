import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import LoginAuthForm from './loginAuthForm';

describe('LoginAuthForm', () => {
  it('renders the form component', () => {
    render(<LoginAuthForm />);
    const form = screen.getByTestId('login-form');
    expect(form).toBeInTheDocument();
    const email = screen.getByTestId('email-input-test');
    expect(email).toBeInTheDocument();
    const password = screen.getByTestId('password-input-test');
    expect(password).toBeInTheDocument();
    const recovery = screen.getByTestId('recovery-link-test');
    expect(recovery).toBeInTheDocument();
    const submitButton = screen.getByTestId('submit-button-test');
    expect(submitButton).toBeInTheDocument();
  });
});
