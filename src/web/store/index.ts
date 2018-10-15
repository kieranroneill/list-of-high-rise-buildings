import {
    applyMiddleware,
    combineReducers,
    createStore,
    Reducer,
    Store
} from 'redux';

// Middleware.
import { apiMiddleware } from './apiMiddleware';

// Types.
import { CitiesState } from './cities/types';

// Reducers.
import citiesReducer from './cities/reducer';

export interface ApplicationState {
    cities: CitiesState;
}

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    cities: citiesReducer,
});

export function configureStore(): Store<ApplicationState> {
    return createStore(
        reducers,
        applyMiddleware(apiMiddleware())
    );
}
