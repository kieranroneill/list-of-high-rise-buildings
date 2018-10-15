// Reducer.
import reducer from './reducer';

// Types.
import {
    CitiesActionTypes,
    CitiesState,
    GetCitiesErrorAction,
    GetCitiesRequestAction,
    GetCitiesSuccessAction
} from './types';

// Utils.
import { getInitialState } from './utils';

interface Scope {
    initialState: CitiesState;
}

describe('store/cities/reducer', () => {
    let scope: Scope;

    beforeEach(() => {
        scope = {
            initialState: getInitialState(),
        };
    });

    describe('CitiesActionTypes.GetCitiesError', () => {
        it('should stop loading and set an error message', () => {
            const error: string = 'BOOM!!!';
            const action: GetCitiesErrorAction = {
                type: CitiesActionTypes.GetCitiesError,
                payload: {
                    error,
                },
            };
            let state: CitiesState;

            scope.initialState.loading = true;

            state = reducer(scope.initialState, action);

            expect(state.error).toBe(error);
            expect(state.loading).toBe(false);
        });
    });

    describe('CitiesActionTypes.GetCitiesRequest', () => {
        it('should start loading', () => {
            const action: GetCitiesRequestAction = {
                actionTypes: ['REQUEST', 'SUCCESS', 'ERROR'],
                method: 'GET',
                type: CitiesActionTypes.GetCitiesRequest,
                url: '/over/the/rainbow',
            };

            scope.initialState.loading = false;

            expect(reducer(scope.initialState, action).loading).toBe(true);
        });
    });

    describe('CitiesActionTypes.GetCitiesSuccess', () => {
        it('should stop loading and set the cities', () => {
            const expectedCities: City[] = [
                {
                    '100m+': 63,
                    '150m+': 17,
                    '200m+': 4,
                    '300m+': 1,
                    allBuildings: 90,
                    allStructures: 91,
                    country: 'Canada',
                    id: 54,
                    name: 'Calgary',
                    telecomTowers: 1,
                }
            ];
            const action: GetCitiesSuccessAction = {
                payload: expectedCities,
                statusCode: 200,
                type: CitiesActionTypes.GetCitiesSuccess,
            };
            let state: CitiesState;

            scope.initialState.loading = true;

            state = reducer(scope.initialState, action);

            expect(state.cities).toBe(expectedCities);
            expect(state.error).toBe('');
            expect(state.loading).toBe(false);
        });
    });
});



