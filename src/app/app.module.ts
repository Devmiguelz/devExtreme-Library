import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { DxCheckBoxModule, DxSchedulerModule, DxSelectBoxModule, DxTabPanelModule, DxTemplateModule } from "devextreme-angular";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SchedulerTimelineComponent } from './scheduler-timeline/scheduler-timeline.component';
import { TabsComponent } from './tabs/tabs.component';
import { RecordAnestesiaModule } from './record-anestesia/record-anestesia.module';

@NgModule({
  declarations: [
    AppComponent,
    SelectBoxComponent,
    SchedulerTimelineComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecordAnestesiaModule,
    DxSelectBoxModule,
    DxSchedulerModule,
    DxTabPanelModule,
    DxCheckBoxModule,
    DxTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);