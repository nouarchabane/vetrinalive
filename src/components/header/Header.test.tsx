import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Header from './Header';

test('Header render test ...', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  expect(getByTestId('appbar-testid')).toBeInTheDocument();
  expect(getByTestId('title-testid').innerHTML).toBe('Dashboard');
  expect(getByTestId('link-testid').innerHTML).toBe('What\'s new');
});
