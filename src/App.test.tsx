import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  describe('when there are no beers', () => {
    it('should display no beers when the initial app loads', async() => {
      const { queryAllByTestId } = render(
          <App />
      )

      const beers = queryAllByTestId('beer');

      expect(beers.length).toEqual(0)
    });

    it('should render the number of beers the user clicked', async() => {
      const { findAllByTestId, findByRole } = render(
          <App />
      )

      const button = await findByRole('button');

      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);

      const beers = await findAllByTestId('beer');

      expect(beers.length).toEqual(3);
    });
  });

  describe('when a customer drinks too many beers', () => {
    it('should kick them out', async() => {
      const { findByText, findByRole } = render(
          <App />
      )

      const button = await findByRole('button');

      for (let x = 0; x < 48; x++) {
        fireEvent.click(button);
      }

      expect(await findByText(`You have been 86'ed`)).toBeInTheDocument();
    });
  });
});
