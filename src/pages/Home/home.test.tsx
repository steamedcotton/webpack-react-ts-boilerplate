import React from 'react';
import { Home } from './';
import renderer from 'react-test-renderer';

test('<Home /> Renders', () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
