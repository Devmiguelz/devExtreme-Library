import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordAnestesiaComponent } from './record-anestesia.component';
import { AnesthesiaSheetComponent } from './components/anesthesia-sheet/anesthesia-sheet.component';
import { AnesthesiaBasketComponent } from './components/anesthesia-basket/anesthesia-basket.component';
import { DxDataGridModule, DxRadioGroupModule, DxTabPanelModule, DxTextBoxModule, DxCheckBoxModule, DxNumberBoxModule, DxSelectBoxModule, DxGanttModule, DxAccordionModule, DxSliderModule, DxTagBoxModule, DxTemplateModule, DxTooltipModule, DxPopupModule, DxButtonModule, DxDateBoxModule } from 'devextreme-angular';
import { SuppliesMedicinesAddComponent } from './components/supplies-medicines-add/supplies-medicines-add.component';
import { SuppliesMedicinesListComponent } from './components/supplies-medicines-list/supplies-medicines-list.component';
import { SheetAnesthesiaComponent } from './components/sheet-anesthesia/sheet-anesthesia.component';
import { RecordAnestesiaRoutingModule } from './record-anestesia-routing.module';

@NgModule({
  declarations: [
    RecordAnestesiaComponent, 
    AnesthesiaSheetComponent, 
    AnesthesiaBasketComponent, SuppliesMedicinesAddComponent, SuppliesMedicinesListComponent, SheetAnesthesiaComponent
  ],
  imports: [
    CommonModule,
    RecordAnestesiaRoutingModule,
    DxGanttModule,
    DxTabPanelModule,
    DxRadioGroupModule,
    DxDataGridModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxCheckBoxModule,
    DxAccordionModule,
    DxSliderModule,
    DxTagBoxModule,
    DxTooltipModule,
    DxPopupModule,
    DxDateBoxModule,
    DxButtonModule,
    DxTemplateModule
  ]
})
export class RecordAnestesiaModule { }
