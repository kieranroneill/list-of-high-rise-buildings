import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

// Components.
import { CityTable, Props } from './';

// Mocks.
import { MockLocation } from '../../../../test/mocks/reactRouterMock';

// Store.
import { getInitialState as getInitialCitiesState } from '../../store/cities/utils';

interface Scope {
    props: Props;
    wrapper: ShallowWrapper;
}

describe('src/web/components/CityTable', () => {
    let scope: Scope;

    beforeEach(() => {
        const props: Props = {
            citiesState: getInitialCitiesState(),
            location: new MockLocation(),
        };

        scope = {
            props,
            wrapper: shallow(<CityTable {...props} />),
        };
    });

    describe('<CityTable /> snapshots', () => {
        it('should match the snapshot with the default props', () => {
            expect(scope.wrapper).toMatchSnapshot();
        });

        it('should match the snapshot when the cities is loading', () => {
            scope.wrapper.setProps({
                citiesState: {
                    ...scope.props.citiesState,
                    loading: true,
                },
            } as Partial<Props>);

            expect(scope.wrapper).toMatchSnapshot();
        });

        it('should display the table with values', () => {
            scope.wrapper.setProps({
                citiesState: {
                    ...scope.props.citiesState,
                    cities: [
                        {
                            '100m+': 87,
                            '150m+': 21,
                            '200m+': 3,
                            '300m+': 0,
                            allBuildings: 111,
                            allStructures: 114,
                            country: 'United States',
                            id: 44,
                            name: 'San Francisco',
                            telecomTowers: 3
                        }
                    ],
                    loading: false,
                },
            } as Partial<Props>);

            expect(scope.wrapper).toMatchSnapshot();
        });
    });
});
