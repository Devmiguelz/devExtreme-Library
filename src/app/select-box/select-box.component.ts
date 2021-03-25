import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styles: []
})
export class SelectBoxComponent implements OnInit {

    selectedItem: any;
    proceduresList = [
        {
            "IdSintomaTriage": "2cf918d5-0ec2-4d95-8b66-332b6050a44c",
            "DescripcionTriage": "Sangrado vaginal durante el embarazo"
        },
        {
            "IdSintomaTriage": "8760e9d1-9b20-4ff1-8a26-3d6da3c3b628",
            "DescripcionTriage": "Hemorragia uterina"
        },
        {
            "IdSintomaTriage": "ee38d367-894b-4f5b-b1d0-6fcd1eed691f",
            "DescripcionTriage": "Diarrea con signos de deshidratación"
        },
        {
            "IdSintomaTriage": "f343fd30-bd6b-4dc7-8bac-745ede681dce",
            "DescripcionTriage": "Diarrea sin signos de deshidratación"
        },
        {
            "IdSintomaTriage": "386b5fe9-cacb-42f1-b55d-78fd44c8194a",
            "DescripcionTriage": "Hematemesis"
        },
        {
            "IdSintomaTriage": "1abb74c2-4abe-4ec2-81e9-8b89728358a2",
            "DescripcionTriage": "Dolor de cabeza"
        },
        {
            "IdSintomaTriage": "1abb74c2-4abe-4ec2-81e9-8b89728358a3",
            "DescripcionTriage": "Dolor en extremidad sin trauma"
        },
        {
            "IdSintomaTriage": "bf158a85-c71d-4174-bdb4-bf4fe42baa6e",
            "DescripcionTriage": "Signos deshidratación lactante (llanto seco, depresión fontanela)"
        },
        {
            "IdSintomaTriage": "fc9f103a-9a77-410a-a856-c26d6d403de9",
            "DescripcionTriage": "Síncope con recuperación de conciencia"
        },
        {
            "IdSintomaTriage": "ab126901-0b44-4c5c-b5bd-c420216601ee",
            "DescripcionTriage": "Vómito"
        }];

  constructor() { }

  ngOnInit(): void {
  }

  addCustomItem(data: any) : void{
    console.log(data);  
    console.log(this.selectedItem);    
  }

}
