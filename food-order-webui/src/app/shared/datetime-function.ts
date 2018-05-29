import { Injectable } from "@angular/core";

@Injectable()
export class DatetimeFunction {
    dateToStringDDMMYYYY(date: Date) : String {
        var dd = date.getDate();
        var mm = date.getMonth()+1; //January is 0!
        
        var yyyy = date.getFullYear();

        return dd+'/'+mm+'/'+yyyy;
    }

    dateToStringWWWDDMM(date: Date) : String {
        var retString = "";
        var www = date.getDay();
        var dd = date.getDate();
        var mm = date.getMonth()+1; //January is 0!

        var wwwStr = "";
        switch (www) {
            case 0:  retString += "SUN";   break;
            case 1:  retString += "MON";   break;
            case 2:  retString += "TUE";   break;
            case 3:  retString += "WED";   break;
            case 4:  retString += "THU";   break;
            case 5:  retString += "FRI";   break;
            case 6:  retString += "SAT";   break;
            default: break;
        }

        retString += ', '

        if (dd < 10) {
            retString += '0';
        }
        retString += dd;
        retString += ' / '

        if (mm < 10) {
            retString += '0';
        }
        retString += mm;

        return retString;
    }
}