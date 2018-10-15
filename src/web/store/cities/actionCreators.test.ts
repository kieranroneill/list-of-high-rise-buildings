import { assert,  SinonStub, stub } from 'sinon';

// Action creators.
import * as apiActionCreators from '../api/actionCreators';
import { getCities } from './actionsCreators';

// Types.
import { CitiesActionTypes } from './types';

describe('store/cities/actionCreators', () => {
    describe('getCities()', () => {
        it('should create an action to get a list of cities', () => {
            const callApiStub: SinonStub = stub(apiActionCreators, 'callApi');

            getCities();

            assert.calledWith(
                callApiStub,
                [
                    CitiesActionTypes.GetCitiesRequest,
                    CitiesActionTypes.GetCitiesSuccess,
                    CitiesActionTypes.GetCitiesError,
                ],
                '/city',
                'GET'
            );

            callApiStub.restore();
        });
    });
});

