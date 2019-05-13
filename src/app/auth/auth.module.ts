import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from '../core/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('authState', fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ]
})
export class AuthModule { }
