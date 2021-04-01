import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordAnestesiaComponent } from './record-anestesia.component';

const routes: Routes = [
  { path: '', component: RecordAnestesiaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordAnestesiaRoutingModule { }
