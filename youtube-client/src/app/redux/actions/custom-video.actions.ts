import { createAction, props } from '@ngrx/store';
import { ICustomVideo } from '../app.state';

export const addCustomVideo = createAction(
  '[CreateCardPage Component] addCustomVideo',
  props<ICustomVideo>(),
);
