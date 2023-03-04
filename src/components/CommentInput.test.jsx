/**
 * - CommentInput Specs
 *   - should show login status when user not logged yet
 *   - should handle content typing correctly
 *   - should call addComment function when addComment button is clicked
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CommentInput from './CommentInput';

import '@testing-library/jest-dom';

describe('CommentInput component', () => {
  it('should show Login when authUser is null', async () => {
    render(<BrowserRouter><CommentInput authUser={null} addComment={() => { }} /></BrowserRouter>);

    const loginLink = screen.getByText('Login to reply the thread!');

    expect(loginLink).toBeInTheDocument();
  });

  it('should handle email typing correctly', async () => {
    render(<BrowserRouter><CommentInput authUser={{ id: "id", email: "email", name: "name", avatar: "avatar" }} addComment={() => { }} /></BrowserRouter>);
    const contentInput = screen.getByPlaceholderText('Reply as name');

    await userEvent.type(contentInput, 'haloooooodawadwad');

    expect(contentInput).toHaveValue('haloooooodawadwad');
  });

  it('should call comment function when comment button is clicked', async () => {
    const mockComment = jest.fn();
    render(<BrowserRouter><CommentInput authUser={{ id: "id", email: "email", name: "name", avatar: "avatar" }} addComment={mockComment} /></BrowserRouter>);
    const contentInput = screen.getByPlaceholderText('Reply as name');
    await userEvent.type(contentInput, 'haloooooodawadwad');
    const addCommentButton = screen.getByRole('button', { name: 'Add Comments' });

    await userEvent.click(addCommentButton);

    expect(mockComment).toBeCalledWith({
      content: 'haloooooodawadwad',
    });
  });
});