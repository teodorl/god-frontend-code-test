import React from 'react';
import { render } from '../../test-utils';
import { TopNav } from './';

describe('<TopNav /> spec', () => {
    it('renders the component', () => {
        const container = render(<TopNav />);
        expect(container.firstChild).toMatchSnapshot()
    });
});
