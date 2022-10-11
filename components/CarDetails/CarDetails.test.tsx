import React from 'react';
import { render } from '../../test-utils';
import { CarDetails } from './';

const mockProps = {
    bodyType: 'suv',
    id: 'xc-90',
    imageUrl: '/image-url',
    modelName: 'XC 90',
    modelType: 'plug-in-hybrid',
};

describe('<CarDetails /> spec', () => {
    it('renders the component', () => {
        const container = render(<CarDetails {...mockProps} />);
        expect(container.firstChild).toMatchSnapshot()
    });
});
