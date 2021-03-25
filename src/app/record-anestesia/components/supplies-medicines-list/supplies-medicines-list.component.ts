import { Component, Input, OnInit } from '@angular/core';
import { DataRadio, DataMedicamentoList } from '../../models/models';

@Component({
  selector: 'app-supplies-medicines-list',
  templateUrl: './supplies-medicines-list.component.html',
  styleUrls: ['./supplies-medicines-list.component.css']
})
export class SuppliesMedicinesListComponent implements OnInit {

  @Input('radioselected') radioSelected: DataRadio;

  medicamentosList: DataMedicamentoList[] = [{
    id: "1",
    nombre: "Aceptaminofem",
    cantidad: 5,
    unidadMedida: "mg",
    validacion: true,
    observaciones: ""
  }, {
    id: "2",
    nombre: "Cutamycon",
    cantidad: 1,
    unidadMedida: "mg",
    validacion: true,
    observaciones: ""
  }, {
    id: "3",
    nombre: "Vitaminas",
    cantidad: 4,
    unidadMedida: "ml",
    validacion: true,
    observaciones: ""
  }];

  insumoList: DataMedicamentoList[] = [{
    id: "1",
    nombre: "Omeprazol",
    cantidad: 1,
    unidadMedida: "mg",
    validacion: true,
    observaciones: ""
  }, {
    id: "2",
    nombre: "Paracetamol",
    cantidad: 4,
    unidadMedida: "mg",
    validacion: true,
    observaciones: ""
  }, {
    id: "3",
    nombre: "Lexotiroxina",
    cantidad: 6,
    unidadMedida: "ml",
    validacion: false,
    observaciones: "No cumple con la especificaiones de la canasta"
  }];

  constructor() { }

  ngOnInit(): void {
    console.log(this.radioSelected);
  }

  CheckValidacionChange(estadoCheck: boolean, item: any): void {
    if(estadoCheck) {
      item.data.observaciones = "";
    }
  }

}
