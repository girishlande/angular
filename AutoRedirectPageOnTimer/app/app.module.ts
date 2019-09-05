import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TimerTestComponent } from './timer-test/timer-test.component';
import { T1Component } from './TimerTest/t1/t1.component';
import { T2Component } from './TimerTest/t2/t2.component';
import { FormsModule } from '@angular/forms';

const routes = [
  { path: 'T1', component: T1Component },
  { path: 'T2', component: T2Component }
];

@NgModule({
  declarations: [
    AppComponent,
    TimerTestComponent,
    T1Component,
    T2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
