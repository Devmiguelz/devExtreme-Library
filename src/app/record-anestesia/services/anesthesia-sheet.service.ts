import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  parentId: number;
  title: string;
  start: Date;
  end: Date;
  progress: number;
}

const currentDate: Date = new Date(Date.now());
const day: number = currentDate.getDay();
const month: number = currentDate.getMonth() + 1;
const year: number = currentDate.getFullYear();

const hours: number = currentDate.getHours();
const minutes: number = currentDate.getMinutes();
const seconds: number = currentDate.getSeconds();

let tasks: Task[] = [{
  'id': 1,
  'parentId': 0,
  'title': 'Anestesia',
  'start': new Date(year, month, day, hours, minutes, seconds),
  'end': new Date(year, month, day, hours + 5, minutes, seconds),
  'progress': 0
}, {
  'id': 2,
  'parentId': 0,
  'title': 'Intubación / Extubación',
  'start': new Date(year, month, day, hours, minutes + 15, seconds),
  'end': new Date(year, month, day, hours + 4, minutes - 15, seconds),
  'progress': 0
}, {
  'id': 3,
  'parentId': 0,
  'title': 'Inhaladores',
  'start': new Date(year, month, day, hours, minutes + 20, seconds),
  'end': new Date(year, month, day, hours + 3, minutes - 20, seconds),
  'progress': 0
}, {
  'id': 4,
  'parentId': 0,
  'title': 'Cirugia',
  'start': new Date(year, month, day, hours, minutes + 40, seconds),
  'end': new Date(year, month, day, hours + 5, minutes - 20, seconds),
  'progress': 0
}, {
  'id': 5,
  'parentId': 0,
  'title': 'Monitoreo Oxigenación',
  'start': new Date(year, month, day, hours, minutes + 32, seconds),
  'end': new Date(year, month, day, hours + 2, minutes - 20, seconds),
  'progress': 0
}, {
  'id': 6,
  'parentId': 0,
  'title': 'Monitoreo Hemodinamico',
  'start': new Date(year, month, day, hours, minutes + 14, seconds),
  'end': new Date(year, month, day, hours + 3, minutes - 17, seconds),
  'progress': 0
}];


@Injectable({
  providedIn: 'root'
})
export class AnesthesiaSheetService {

  constructor() { }

  getTasks(): Task[] {
    return tasks;
  }

}
