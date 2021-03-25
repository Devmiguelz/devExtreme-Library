import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulerTimelineComponent } from './scheduler-timeline/scheduler-timeline.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { TabsComponent } from './tabs/tabs.component';
import { RecordAnestesiaComponent } from './record-anestesia/record-anestesia.component';

const routes: Routes = [
  {
    path: 'select',
    component: SelectBoxComponent
  },
  {
    path: 'timeline',
    component: SchedulerTimelineComponent
  },
  {
    path: 'tabs',
    component: TabsComponent
  },
  {
    path: 'record-anestesia',
    component: RecordAnestesiaComponent
  },
  {
    path: '**',
    redirectTo: 'select'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
