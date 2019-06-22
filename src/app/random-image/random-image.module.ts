import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomImageComponent } from './random-image/random-image.component';
import { CustomMaterialModule } from '../core/material.module';

@NgModule({
  declarations: [RandomImageComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ]
})
export class RandomImageModule { }
