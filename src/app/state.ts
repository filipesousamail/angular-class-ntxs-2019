import { Action, createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';

import { Video } from './dashboard/interfaces';

export const initializeVideos = createAction(
  'INITIALIZE_VIDEOS'
);

export const videoListArrived = createAction(
  'VIDEO_LIST_ARRIVED',
  props<{ videos: Video[] }>()
);

export interface DashboardState {
  videoList: Video[];
}

export interface AppState {
  dashboard: DashboardState;
}

const initialState: DashboardState = {
  videoList: []
};

export const dashboardReducer = createReducer(
  initialState,
  on(videoListArrived, (state, action) => {
    return {
      ...state,
      videoList: [...action.videos]
    };
  })
);

const getDashboardState =
  createFeatureSelector<DashboardState>('dashboard');

export const getVideos =
  createSelector(getDashboardState, state => [...state.videoList]);
