/**
 * - RegisterInput Specs
 *   - should handle username typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call Register function when register button is clicked
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Register from './RegisterInput';

import '@testing-library/jest-dom';

describe('Register component', () => {
  it('should handle username typing correctly', async () => {
    render(<BrowserRouter><Register register={() => { }} /></BrowserRouter>);
    const usernameInput = screen.getByLabelText('Username');

    await userEvent.type(usernameInput, 'usernametest');

    expect(usernameInput).toHaveValue('usernametest');
  });

  it('should handle email typing correctly', async () => {
    render(<BrowserRouter><Register register={() => { }} /></BrowserRouter>);
    const emailInput = screen.getByLabelText('Email');

    await userEvent.type(emailInput, 'emailtest');

    expect(emailInput).toHaveValue('emailtest');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<BrowserRouter><Register register={() => { }} /></BrowserRouter>);
    const passwordInput = await screen.getByLabelText('Password');

    // Action
    await userEvent.type(passwordInput, 'passwordtest');

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = jest.fn();
    render(<BrowserRouter><Register register={mockLogin} /></BrowserRouter>);
    const usernameInput = screen.getByLabelText('Username');
    await userEvent.type(usernameInput, 'usernametest');
    const emailInput = await screen.getByLabelText('Email');
    await userEvent.type(emailInput, 'emailtest');
    const passwordInput = await screen.getByLabelText('Password');
    await userEvent.type(passwordInput, 'passwordtest');
    const loginButton = await screen.getByRole('button', { name: 'Register' });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      name: 'usernametest',
      email: 'emailtest',
      password: 'passwordtest',
    });
  });
});