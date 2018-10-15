import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

// Components.
import { PageShell, Props } from './';

interface Scope {
    props: Props;
    wrapper: ShallowWrapper;
}

describe('src/web/components/PageShell', () => {
    let scope: Scope;

    beforeEach(() => {
        const props: Props = {
            children: <h1>Hello human</h1>,
            getCities: jest.fn(),
        };

        scope = {
            props,
            wrapper: shallow(<PageShell {...props} />),
        };
    });

    describe('<PageShell /> snapshots', () => {
        it('should match the snapshot with the default props', () => {
            expect(scope.wrapper).toMatchSnapshot();
        });
    });

    describe('when the component mounts', () => {
        it('should dispatch an action to get the cities', () => {
            expect(scope.props.getCities).toBeCalled();
        });
    });
});
