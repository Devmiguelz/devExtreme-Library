import { generateID } from "src/app/utils/utilidades";

export class HoursTimeLine {
    public id: string;
    public text: string;
    public date: Date;
    public minutes: number;
    public main: boolean;
    public tooltipVisible: boolean;

    constructor(text:string, date: Date, minutes: number, main: boolean) {
        this.id = generateID(5);
        this.text = text;
        this.date = date;
        this.minutes = minutes;
        this.main = main;
        this.tooltipVisible = false;
    }
}