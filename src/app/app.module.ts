import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { FormpageComponent } from './formpage/formpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ClockComponent } from './clock/clock.component';
import { PreptimeComponent } from './preptime/preptime.component';
import { ReptimeComponent } from './reptime/reptime.component';
import { IntervaltimeComponent } from './intervaltime/intervaltime.component';
import { ExerciseintervalComponent } from './exerciseinterval/exerciseinterval.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: FormpageComponent
  }, {
    path: 'clock',
    component: ClockComponent
  },
  {
    path: 'prep',
    component: PreptimeComponent
  }, {
    path: 'rep',
    component: ReptimeComponent
  },
  {
    path: 'interval',
    component: IntervaltimeComponent
  },
  {
    path: 'exerciseint',
    component: ExerciseintervalComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FormpageComponent,
    ClockComponent,
    PreptimeComponent,
    ReptimeComponent,
    IntervaltimeComponent,
    ExerciseintervalComponent
  ],
  imports: [
    RouterModule.forRoot(routes),BrowserModule, BrowserAnimationsModule, FlexLayoutModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
