import { Component, OnInit } from '@angular/core';
import { AnesthesiaSheetService, Task } from '../../services/anesthesia-sheet.service';

@Component({
  selector: 'app-anesthesia-sheet',
  templateUrl: './anesthesia-sheet.component.html',
  styleUrls: ['./anesthesia-sheet.component.css']
})
export class AnesthesiaSheetComponent implements OnInit {

  tasks: Task[];
  currentTime: Date;
  
  constructor(public _anesthesiaSheetService: AnesthesiaSheetService) {
    this.tasks = _anesthesiaSheetService.getTasks();
    console.log(this.tasks);    
  }

  ngOnInit(): void { }

}
