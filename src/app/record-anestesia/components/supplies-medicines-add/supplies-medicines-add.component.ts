import { Component, Input, OnInit } from '@angular/core';
import { DataRadio, DataMedicamentoAdd, DataUnidadMedida, DataMedicamento } from '../../models/models';

@Component({
  selector: 'app-supplies-medicines-add',
  templateUrl: './supplies-medicines-add.component.html',
  styleUrls: ['./supplies-medicines-add.component.css']
})
export class SuppliesMedicinesAddComponent implements OnInit {

  @Input('radioselected') radioSelected: DataRadio;

  dataUnidadMedidaSelect: DataUnidadMedida[] = [
    {
      id: "1",
      unidadMedida: "g"
    },
    {
      id: "2",
      unidadMedida: "mg"
    },
    {
      id: "3",
      unidadMedida: "ml"
    }
  ];

  dataMedicamentoSelect: DataMedicamento[] = [
    {
      id: "1",
      medicamento: "Simvastatina"
    },
    {
      id: "2",
      medicamento: "Aspirina"
    },
    {
      id: "3",
      medicamento: "Omeprazol"
    },
    {
      id: "4",
      medicamento: "Lexotiroxina sódica"
    },
    {
      id: "5",
      medicamento: "Ramipril"
    },
    {
      id: "6",
      medicamento: "Paracetamol"
    },
  ];
  
  medicamentoSelected: DataMedicamento;


  insumoList: DataMedicamentoAdd[] = [];
  medicamentosList: DataMedicamentoAdd[] = [];

  constructor() { }

  ngOnInit(): void { }

  SelectMedicamentoChange(event: any): void {
    console.log(event);    
  }

  SelectUnidadMedidaChange(event: string, itemData: DataMedicamentoAdd): void {
    console.log(event);    
    console.log(itemData);    
  }

  AddListInsumos(): void {
    this.AddRowToList(this.insumoList);
    console.log(this.insumoList);    
  }

  AddRowToList(dataList: DataMedicamentoAdd[]): void {
    dataList.push({
      medicamentoId: "",
      medicamento: "",
      cantidad: 1,
      unidadMedida: "",
      unidadMedidaId: "",
      observaciones: ""
    });
  }

}
