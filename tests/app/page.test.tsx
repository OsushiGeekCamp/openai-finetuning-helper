import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import '@testing-library/jest-dom';

jest.mock('src/containers/api-key-form', () => () => (
  <div data-testid='mock-api-key-form-container'>Mock ApiKeyFormContainer</div>
));

describe('<Home />', () => {
  it('renders the mock ApiKeyFormContainer component', () => {
    render(<Home />);
    const mockFormContainer = screen.getByTestId('mock-api-key-form-container');
    expect(mockFormContainer).toBeInTheDocument();
    expect(mockFormContainer.textContent).toBe('Mock ApiKeyFormContainer');
  });
});
