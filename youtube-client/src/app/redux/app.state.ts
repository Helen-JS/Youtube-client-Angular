import { IItem, IResponse } from '../core/models/models';

export interface ICustomVideo {
  title: string
  description: string
  img: string
  link: string
  date: string
}

export interface IAppState {
    apiVideos: IItem[]
    customVideos: ICustomVideo[]
}

export const initialAppState: IAppState = {
  apiVideos: [],
  customVideos: [],
};
