import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup.component';

const routes: Routes = [
  { path: '', component: SignupComponent }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  declarations: [SignupComponent]
})
export class SignupModule { }
