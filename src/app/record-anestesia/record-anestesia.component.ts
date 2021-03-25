import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-anestesia',
  templateUrl: './record-anestesia.component.html',
  styleUrls: ['./record-anestesia.component.css']
})
export class RecordAnestesiaComponent implements OnInit {

  tabPanels: any[] =
    [
      { "ID": 1, "PanelName": "HOJA DE ANESTESIA" },
      { "ID": 2, "PanelName": "CANASTA DE ANESTESIA" }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
