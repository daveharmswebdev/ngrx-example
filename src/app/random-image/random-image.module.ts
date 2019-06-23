import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomImageComponent } from './random-image/random-image.component';
import { CustomMaterialModule } from '../core/material.module';
import { StoreModule } from '@ngrx/store';
import { randomImageReducer } from './store/random-image.reducer';
import { HttpClientModule } from '@angular/common/http';
import { RandomImageService } from './random-image.service';
import { EffectsModule } from '@ngrx/effects';
import { RandomImageEffects } from './store/random-image.effects';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [RandomImageComponent, PhotoComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    StoreModule.forFeature('randomImageState', randomImageReducer),
    EffectsModule.forFeature([RandomImageEffects]),
    HttpClientModule
  ],
  providers: [RandomImageService]
})
export class RandomImageModule { }
