// Action creators.
import { callApi } from '../api/actionCreators';

// Types.
import { CallApiAction } from '../api/types';
import { CitiesActionTypes } from './types';

export const getCities: () => CallApiAction = () => {
    return callApi(
        [
            CitiesActionTypes.GetCitiesRequest,
            CitiesActionTypes.GetCitiesSuccess,
            CitiesActionTypes.GetCitiesError,
        ],
        '/city',
        'GET'
    );
};
