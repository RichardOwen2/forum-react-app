import React from 'react';
import useInput from '../hooks/useInput';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

import '@testing-library/jest-dom';

describe('Register component', () => {
  it('should handle keyword typing correctly', async () => {
    const keywordChange = jest.fn();
    const keyword = '';

    render(<SearchBar keyword={keyword} keywordChange={keywordChange} />);
    const searchInput = screen.getByPlaceholderText('Search...');

    await userEvent.type(searchInput, 'abc');

    expect(keywordChange).toBeCalledWith('a');
    expect(keywordChange).toBeCalledWith('b');
    expect(keywordChange).toBeCalledWith('c');
  });
});
