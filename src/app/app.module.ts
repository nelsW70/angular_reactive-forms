import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [AppComponent, SignupFormComponent, ChangePasswordComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
