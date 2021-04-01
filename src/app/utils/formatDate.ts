
export function FormatDate(date: Date) {

    const dateString = date.getFullYear() + '-' +
        ("00" + (date.getMonth() + 1)).slice(-2) + '-' +
        ("00" + date.getDate()).slice(-2);

    return dateString;
}

export function FormatDateTime(date: Date) {

    const dateString = date.getFullYear() + '-' +
        ("00" + (date.getMonth() + 1)).slice(-2) + '-' +
        ("00" + date.getDate()).slice(-2);

    const timeString = ("00" + date.getHours()).slice(-2) + ":" +
        ("00" + date.getMinutes()).slice(-2) + ":" +
        ("00" + date.getSeconds()).slice(-2);

    return dateString + " " + timeString;
}

export function FormatTime(date: Date, seconds: boolean = true) {

    const timeString = ("00" + date.getHours()).slice(-2) + ":" +
        ("00" + date.getMinutes()).slice(-2) + (seconds ?  ":" + ("00" + date.getSeconds()).slice(-2) : '');

    return timeString;
}

export function RestarMinutesDate(date: Date, minutes: number) {

    date.setMinutes(date.getMinutes() - minutes);

    return date;
}

export function SumarMinutesDate(date: Date, minutes: number) {

    date.setMinutes(date.getMinutes() + minutes);

    return date;
}

export function Minutes15Time(date: Date) {

    let newMinutes = 0;
    let minutes = date.getMinutes();
 
    if(minutes >= 0 && minutes <= 15) {
        newMinutes = 0;
    } else if(minutes > 15 && minutes <= 30) {
        newMinutes = 15;
    } else if(minutes > 30 && minutes <= 45) {
        newMinutes = 30;
    } else if(minutes > 45 && minutes <= 59) {
        newMinutes = 45;
    }

    let newDate = new Date(date.getTime());
    newDate.setMinutes(newMinutes);
    
    return newDate;
}