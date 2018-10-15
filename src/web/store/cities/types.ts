import { Action } from 'redux';

// Types.
import {
    ApiErrorAction,
    ApiRequestAction,
    ApiSuccessAction,
} from '../api/types';

//====================================================
// Action types.
//====================================================

export enum CitiesActionTypes {
    GetCities = '@cities/GET_CITIES',
    GetCitiesError = '@cities/GET_CITIES_ERROR',
    GetCitiesRequest = '@cities/GET_CITIES_REQUEST',
    GetCitiesSuccess = '@cities/GET_CITIES_SUCCESS',
}

//====================================================
// Actions.
//====================================================

export interface GetCitiesAction extends Action {
    type: CitiesActionTypes.GetCities;
}

export type GetCitiesErrorAction = ApiErrorAction<CitiesActionTypes.GetCitiesError>;

export type GetCitiesRequestAction = ApiRequestAction<CitiesActionTypes.GetCitiesRequest>;

export type GetCitiesSuccessAction = ApiSuccessAction<CitiesActionTypes.GetCitiesSuccess, City[]>;

export type CitiesActions = GetCitiesAction
    | GetCitiesErrorAction
    | GetCitiesRequestAction
    | GetCitiesSuccessAction;

//====================================================
// States.
//====================================================

export interface CitiesState {
    error: string,
    loading: boolean;
    cities: City[];
}
