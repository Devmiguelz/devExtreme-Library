import { Component, OnInit } from '@angular/core';
import { FormatTime, RestarMinutesDate, Minutes15Time, SumarMinutesDate } from '../../../utils/formatDate';
import { HoursTimeLine } from '../../models/HourTimeLine.model';
import { ItemTimeline } from '../../models/models';

@Component({
  selector: 'app-sheet-anesthesia',
  templateUrl: './sheet-anesthesia.component.html',
  styleUrls: ['./sheet-anesthesia.component.css']
})
export class SheetAnesthesiaComponent implements OnInit {

  withAnimationVisible: boolean = false;

  hoursTimeLineMain: HoursTimeLine[] = [];
  hoursTimeLineSecond: HoursTimeLine[] = [];
  hoursTimeLine: HoursTimeLine[] = [];
  hourStart: number = 8;
  hourEnd: number = 10;
  interval: number = 15;
  nroTdMinutes: number = 3;

  date: Date = new Date();

  year: number = 0;
  month: number = 0;
  day: number = 0;

  TimeNow: Date;
  DateNow: Date;

  itemTimeLine: ItemTimeline[] = [];

  constructor() {  }

  ngOnInit(): void {

    this.year = this.date.getFullYear();
    this.month= this.date.getMonth();
    this.day = this.date.getDay();

    this.TimeNow = this.date;
    this.DateNow = this.date;

    this.InitDates();    
    this.InitItemTimeLine();
    this.hoursTimeLineMain = this.hoursTimeLine.filter(h => h.main == true);
    this.hoursTimeLineSecond = this.hoursTimeLine.filter(h => h.main == false);

    console.log(this.itemTimeLine);    
    console.log(this.hoursTimeLineSecond);    
  }

  InitDates(): void {
   
    // Fecha en que empezo el registro de anestesia
    let dateStart = new Date(this.year, this.month, this.day, this.hourStart, 10, 0);
    //console.log("dateStart", dateStart);

    // Restamos 15 
    let dateStartInterval = RestarMinutesDate(dateStart, this.interval);
    //console.log(dateStartInterval);    

    // Obtenemos la fecha inicio en multiplos de 15
    let dateStartMinutes = Minutes15Time(dateStartInterval);
    //console.log("dateStartMinutes", dateStartMinutes); 


    // Fecha en que finalizo el registro de anestesia
    let dateEnd = new Date(this.year, this.month, this.day, this.hourEnd, 42, 0);
    //console.log("dateEnd",dateEnd);   

    // Sumamos 15 
    let dateEndInterval = SumarMinutesDate(dateEnd, this.interval * 2);
    //console.log(dateEndInterval);    

    // Obtenemos la fecha fin en multiplos de 15
    let dateEndtMinutes = Minutes15Time(dateEndInterval);
    //console.log("dateEndtMinutes", dateEndtMinutes); 

    let currentDateTemp = dateStartMinutes;
    let currentTime = currentDateTemp.getTime();

    // Datos de Inicio
    let timeStart = dateStartMinutes.getTime();

    // Datos de Finalizacion
    let timeEnd = dateEndtMinutes.getTime();


    while (currentTime >= timeStart && currentTime <= timeEnd) {
     
      // LLenamos el array con horas principales
      let time = FormatTime(currentDateTemp, false);
      this.hoursTimeLine.push(new HoursTimeLine(time, new Date(currentDateTemp), this.nroTdMinutes, true));

      // LLenamos el array con horas secundarias
      let currentDateMinutesTemp = new Date(currentDateTemp.getTime());
      for (let index = 0; index < this.nroTdMinutes; index++) {

        // LLenamos el array con horas secundarias
        let time = FormatTime(currentDateMinutesTemp, false);
        this.hoursTimeLine.push(new HoursTimeLine(time, new Date(currentDateMinutesTemp), this.nroTdMinutes, false));

        // Sumanos el intervalo 5
        currentDateMinutesTemp.setMinutes(currentDateMinutesTemp.getMinutes() + 5);
      }
    
      // Sumanos el intervalo 15
      currentDateTemp.setMinutes(currentDateTemp.getMinutes() + this.interval);

      // Actualizamos la hora
      currentTime = currentDateTemp.getTime();

    }
  }

  InitItemTimeLine(): void {
    this.itemTimeLine = [
      {
        startDate: new Date(this.year, this.month, this.day, this.hourStart, 0, 0),
        endDate: new Date(this.year, this.month, this.day, this.hourEnd, 0, 0),
        text: 'Anestesia',
        color: '#F75B45',
        popupVisible: false,
        collapsible: true
      },
      {
        startDate: new Date(this.year, this.month, this.day, this.hourStart, 5, 0),
        endDate: new Date(this.year, this.month, this.day, this.hourEnd - 1, 50, 0),
        text: 'Intubación / Extubación',
        color: '#2874A6',
        popupVisible: false,
        collapsible: true
      },
      {
        startDate: new Date(this.year, this.month, this.day, this.hourStart, 10, 0),
        endDate: new Date(this.year, this.month, this.day, this.hourEnd - 1, 24, 0),
        text: 'Inhaladores',
        color: '#F5B041',
        popupVisible: false,
        collapsible: true
      }
    ];
  }

  compareDate(time: HoursTimeLine, item: ItemTimeline): boolean {    
    
    if(time.date.getTime() >= item.startDate.getTime() && item.endDate.getTime() >= time.date.getTime()) {
      return true;
    } else {
      return false;
    } 
  }

  tooltipItemTimeLine(time: HoursTimeLine): void {
    time.tooltipVisible = !time.tooltipVisible;
  }

  ClickItemTimeLine(item: ItemTimeline){
    item.popupVisible = true;    
  }
}
