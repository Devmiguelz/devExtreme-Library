import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataRadio } from '../../models/models';

@Component({
  selector: 'app-anesthesia-basket',
  templateUrl: './anesthesia-basket.component.html',
  styleUrls: ['./anesthesia-basket.component.css']
})
export class AnesthesiaBasketComponent implements OnInit {

  @Output() radioSelectedEvent = new EventEmitter<DataRadio>();

  dataRadios: DataRadio[] = [
    {
      label: "Insumos y medicamentos entregados.",
      add: false
    },
    {
      label: "Insumos y medicamentos adicionales",
      add: true
    },
    {
      label: "Insumos y medicamentos utilizados.",
      add: false
    },
    {
      label: "Otros insumos y medicamentos utilizados.",
      add: true
    }];
  radioSelected: DataRadio | undefined;
  labelsRadios: string[];
  add: boolean = false;

  constructor() { }

  ngOnInit(): void {   
    this.labelsRadios = this.dataRadios.map((dataradio: DataRadio) => dataradio.label);
  }

  onValueChanged(dataradio: string): void {
    this.radioSelected = this.dataRadios.find(radio => radio.label === dataradio);
    if(this.radioSelected) {
      this.add = this.radioSelected.add;
      this.radioSelectedEvent.emit(this.radioSelected);
    } 
  }

}
