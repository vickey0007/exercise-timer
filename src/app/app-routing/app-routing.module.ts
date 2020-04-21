import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormpageComponent } from '../formpage/formpage.component';
import { ClockComponent } from '../clock/clock.component';
import { PreptimeComponent } from '../preptime/preptime.component';
import { ReptimeComponent } from '../reptime/reptime.component';
import { IntervaltimeComponent } from '../intervaltime/intervaltime.component';
import { ExerciseintervalComponent } from '../exerciseinterval/exerciseinterval.component';

const routes: Routes = [
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

  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
