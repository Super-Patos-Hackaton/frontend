'use client';

import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import LoginAuthForm from './loginAuthForm';

describe('LoginAuthForm', () => {
  it('renders the form component', () => {
    render(<LoginAuthForm />);

    const form = screen.getByTestId('login-form');
    const email = screen.getByTestId('email-input-test');
    const password = screen.getByTestId('password-input-test');
    const recovery = screen.getByTestId('recovery-link-test');
    const submitButton = screen.getByTestId('submit-button-test');

    expect(form).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(recovery).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
