import * as fromPosts from './posts.actions';

export interface IConfig {
  siteId: number;
  accessLevel: number;
  zone: string;
}

export interface IPosts {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IPostsState {
  config: IConfig;
  posts: IPosts[];
  fetchingPosts: boolean;
}

export const initialPostsState: IPostsState = {
  config: {
    siteId: null,
    accessLevel: null,
    zone: null
  },
  posts: [],
  fetchingPosts: false
};

export function postsReducer(
  state: IPostsState = initialPostsState,
  action: fromPosts.PostsActions
): IPostsState {
  switch (action.type) {
    case fromPosts.PostsActionsTypes.LoadConfig:
      return {
        ...state,
        fetchingPosts: true
      };
    case fromPosts.PostsActionsTypes.LoadConfigSuccess:
      return {
        ...state,
        posts: action.payload,
        fetchingPosts: false
      };
    case fromPosts.PostsActionsTypes.LoadConfig:
      return {
        ...state,
        fetchingPosts: false
      };

    default:
      return state;
  }
}
