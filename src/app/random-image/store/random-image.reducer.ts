import { RandomImageActions, RandomImageActionsTypes } from './random-images.actions';

export interface IRandomImageState {
  speed: number;
  fetchingFoto: boolean;
  photo: IPhoto;
}

export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const initialRandomImageState: IRandomImageState = {
  speed: 0,
  fetchingFoto: false,
  photo: null
};

export function randomImageReducer(
  state = initialRandomImageState,
  action: RandomImageActions
): IRandomImageState {
  switch (action.type) {
    case RandomImageActionsTypes.IncreaseSpeed:
      return {
        ...state,
        speed: state.speed < 10 ? state.speed + 1 : state.speed
      };
    case RandomImageActionsTypes.DecreaseSpeed:
      return {
        ...state,
        speed: state.speed > 0 ? state.speed - 1 : state.speed
      };
    case RandomImageActionsTypes.FetchImage:
      return {
        ...state,
        fetchingFoto: true
      };
      case RandomImageActionsTypes.FetchImageSuccess:
        return {
          ...state,
          fetchingFoto: false,
          photo: action.payload
      };
    case RandomImageActionsTypes.FetchImageFailure:
      return {
        ...state,
        fetchingFoto: false
      };
    default:
      return state;
  }
}

export const getSpeed = (state: IRandomImageState) => state.speed;
export const getPhoto = (state: IRandomImageState) => state.photo;
