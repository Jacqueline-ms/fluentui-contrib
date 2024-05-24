import * as React from 'react';
import { render } from '@testing-library/react';
import { AzureLightTheme } from './azureLightTheme';
import { FluentProvider } from '@fluentui/react-components';
describe('AzureLightTheme', () => {
  it('should render', () => {
    render(<FluentProvider theme={AzureLightTheme}></FluentProvider>);
  });
});