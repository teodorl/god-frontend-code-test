import React from 'react';
import { render } from '../../test-utils';
import { FilterBar } from './';

const mockProps = {
    items: ['all', 'suv', 'sedan'],
};

describe('<FilterBar /> spec', () => {
    it('renders the component', () => {
        const container = render(<FilterBar {...mockProps} />);
        expect(container.firstChild).toMatchSnapshot()
    });
});
