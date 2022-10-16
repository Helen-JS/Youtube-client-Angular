import { createAction, props } from '@ngrx/store';
import { IItem } from '../../core/models/models';

export const updateApiVideoList = createAction(
  '[UpdateApiVideo Component] Update',
  props<{newApiVideoList: IItem[]}>(),
);
