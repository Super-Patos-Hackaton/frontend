'use client';

import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import RecoveryAuthForm from './recoveryAuthForm';

describe('RecoveryAuthForm', () => {
  it('renders the form component', () => {
    render(<RecoveryAuthForm />);
    const form = screen.getByTestId('recovery-form');
    expect(form).toBeInTheDocument();
    const email = screen.getByTestId('email-input-test');
    expect(email).toBeInTheDocument();
    const submitButton = screen.getByTestId('submit-button-test');
    expect(submitButton).toBeInTheDocument();
  });
});
