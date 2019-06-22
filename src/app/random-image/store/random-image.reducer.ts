export interface IRandomImageState {
  speed: number;
}

export const initialRandomImageState: IRandomImageState = {
  speed: 0;
}

export function randomImageReducer(
  state = initialRandomImageState,
  action: any
): IRandomImageState {
  switch (action.type) {
    default:
      return state;
  }
}

export const getSpeed = (state: IRandomImageState) => state.speed;
