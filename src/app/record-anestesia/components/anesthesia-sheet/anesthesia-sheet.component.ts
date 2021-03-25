import { Component, OnInit } from '@angular/core';

interface Task {
  id: number;
  parentId: number;
  title: string;
  start: Date;
  end: Date;
  progress: number;
}

interface Dependency {
  id: number;
  predecessorId: number;
  successorId: number;
  type: number;
}

interface Resource {
  id: number;
  text: string;
}

interface ResourceAssignment {
  id: number;
  taskId: number;
  resourceId: number;
}

@Component({
  selector: 'app-anesthesia-sheet',
  templateUrl: './anesthesia-sheet.component.html',
  styleUrls: ['./anesthesia-sheet.component.css']
})
export class AnesthesiaSheetComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

}
