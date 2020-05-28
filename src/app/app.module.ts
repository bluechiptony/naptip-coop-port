import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';

import { authenticationReducer } from './state-management/reducers/authentication.reducer';
import { currentStaffReducer } from './state-management/reducers/staff-in-view.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    ToastrModule.forRoot({
      tapToDismiss: true,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing',
    }),
    StoreModule.forRoot({
      authenticationReducer: authenticationReducer,
      currentStaffReducer: currentStaffReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
