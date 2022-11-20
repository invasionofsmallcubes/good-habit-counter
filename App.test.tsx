import { expect, test } from '@jest/globals';
import App from './App';
import { render, fireEvent } from '@testing-library/react-native';

test('given empty GroceryShoppingList, user can add an item to it', () => {
  const { getByPlaceholderText, getByText, getAllByText } = render(
    <App />
  );

  fireEvent.changeText(
    getByPlaceholderText('Enter grocery item '),
    'banana'
  );
  fireEvent.press(getByText('Add the item to list'));

  const bananaElements = getAllByText('banana');
  expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list
});
