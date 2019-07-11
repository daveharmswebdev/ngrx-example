import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { PostsActions } from './posts.actions';
import { PostsService } from '../posts.service';

@Injectable()
export class PostsEffects {
  constructor(
    private actions$: Actions<PostsActions>,
    private postsService: PostsService
  ) {}


}
