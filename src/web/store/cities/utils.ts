// Types.
import { CitiesState } from './types';

export function getInitialState(): CitiesState {
    return {
        cities: [],
        errors: [],
        loading: false,
    };
}
