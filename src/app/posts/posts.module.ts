import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import { postsReducer } from './store/posts.reducer';
import { PostsHomeComponent } from './posts-home/posts-home.component';
import { PostsService } from './posts.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/posts.effects';
import { CustomMaterialModule } from '../core/material.module';

@NgModule({
  declarations: [PostsHomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CustomMaterialModule,
    StoreModule.forFeature('postsState', postsReducer),
    EffectsModule.forFeature([PostsEffects])
  ],
  providers: [PostsService]
})
export class PostsModule { }
