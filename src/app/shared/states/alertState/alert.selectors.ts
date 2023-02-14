import { selectAppState } from './../../../core/state/app.state';
import { createSelector } from '@ngrx/store';

export const selectAlertState = createSelector(selectAppState, (state) => state.alert);

export const getAlertMessage = createSelector(selectAlertState, (state) => state.message);
export const getAlertShow = createSelector(selectAlertState, (state) => state.show);