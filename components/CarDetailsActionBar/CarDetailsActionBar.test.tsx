import React from 'react';
import { render } from '../../test-utils';
import { CarDetailsActionBar } from './';

const mockProps = {
    id: 'xc-90',
};

describe('<CarDetailsActionBar /> spec', () => {
    it('renders the component', () => {
        const container = render(<CarDetailsActionBar {...mockProps} />);
        expect(container.firstChild).toMatchSnapshot()
    });
});
