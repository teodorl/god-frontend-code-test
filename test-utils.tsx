import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StyleProvider, ThemePicker } from 'vcc-ui';

const AllTheProviders: FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <StyleProvider>
            <ThemePicker variant="light">
                {children}
            </ThemePicker>
        </StyleProvider>
    );
}
     
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui,{
    wrapper: AllTheProviders,
    ...options
});

export * from '@testing-library/react';
export {customRender as render};
