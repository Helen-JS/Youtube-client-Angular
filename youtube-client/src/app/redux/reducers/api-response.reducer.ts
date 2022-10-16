import { createReducer, on } from '@ngrx/store';
import { updateApiResponse } from '../actions/api-response.action';
import { initialAppState } from '../app.state';

export const ApiResponseReducer = createReducer(
  initialAppState,
  on(updateApiResponse, (state) => state),
);
