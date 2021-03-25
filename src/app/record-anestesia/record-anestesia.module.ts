import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordAnestesiaComponent } from './record-anestesia.component';
import { AnesthesiaSheetComponent } from './components/anesthesia-sheet/anesthesia-sheet.component';
import { AnesthesiaBasketComponent } from './components/anesthesia-basket/anesthesia-basket.component';
import { DxDataGridModule, DxRadioGroupModule, DxTabPanelModule, DxTextBoxModule, DxCheckBoxModule, DxNumberBoxModule, DxSelectBoxModule, DxGanttModule } from 'devextreme-angular';
import { SuppliesMedicinesAddComponent } from './components/supplies-medicines-add/supplies-medicines-add.component';
import { SuppliesMedicinesListComponent } from './components/supplies-medicines-list/supplies-medicines-list.component';

@NgModule({
  declarations: [
    RecordAnestesiaComponent, 
    AnesthesiaSheetComponent, 
    AnesthesiaBasketComponent, SuppliesMedicinesAddComponent, SuppliesMedicinesListComponent
  ],
  imports: [
    CommonModule,
    DxTabPanelModule,
    DxRadioGroupModule,
    DxDataGridModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxCheckBoxModule,
    DxGanttModule,
  ]
})
export class RecordAnestesiaModule { }
