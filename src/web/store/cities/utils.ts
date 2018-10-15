// Types.
import { CitiesState } from './types';

export function getInitialState(): CitiesState {
    return {
        cities: [],
        error: '',
        loading: false,
    };
}
