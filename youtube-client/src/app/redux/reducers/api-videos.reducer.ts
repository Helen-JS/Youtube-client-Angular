import { createReducer, on } from '@ngrx/store';
import { updateApiResponse } from '../actions/api-response.action';
import { updateApiVideoList } from '../actions/api-videos.action';
import { initialAppState } from '../app.state';

export const ApiVideoListReducer = createReducer(
  initialAppState.apiVideos,
  on(updateApiVideoList, (state, newApiVideoList) => [...newApiVideoList.newApiVideoList]),
);
