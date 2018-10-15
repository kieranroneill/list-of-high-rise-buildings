import { Reducer } from 'redux';

// Types.
import {
    CitiesActions,
    CitiesActionTypes,
    CitiesState
} from './types';

// Utils.
import { getInitialState } from './utils';

const reducer: Reducer<CitiesState, CitiesActions> = (state: CitiesState = getInitialState(), action: CitiesActions) => {
    switch (action.type) {
        case CitiesActionTypes.GetCitiesError:
            return {
                ...state,
                errors: action.payload.errors,
                loading: false,
            };
        case CitiesActionTypes.GetCitiesRequest:
            return {
                ...state,
                loading: true,
            };
        case CitiesActionTypes.GetCitiesSuccess:
            return {
                ...state,
                cities: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default reducer;
