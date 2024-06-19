'use client';

import { usePathname } from 'next/navigation';

import { render, screen } from '@testing-library/react';

import { describe, expect, it, vi } from 'vitest';

import AuthForm from './authForm';

describe('AuthForm', () => {
  //const mockUsePathName = vi.fn();

  vi.mock('next/navigation', () => ({
    usePathname() {
      return vi.fn();
    },
  }));
  //   const pathName = mockUsePathName.mockImplementation(() => '/login');
  //if (pathName.includes('login')) {

  it('renders the form component', () => {
    render(<AuthForm />);
    const email = screen.getByTestId('email-input-test');
    expect(email).toBeInTheDocument();
    const password = screen.getByTestId('password-input-test');
    expect(password).toBeInTheDocument();
    const submitButton = screen.getByTestId('submit-button-test');
    expect(submitButton).toBeInTheDocument();
    //if (pathName() === '/login') {
    //const recovery = screen.getByTestId('recovery-link-test');
    //expect(recovery).toBeInTheDocument();
    //}
  });
  //  }
});
