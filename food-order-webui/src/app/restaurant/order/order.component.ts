import { Component, OnInit } from '@angular/core';
import { DatetimeFunction } from '../../shared/datetime-function';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private datetimeFunction: DatetimeFunction) { }

  serveOption: ServeOption = ServeOption.Pickup;
  dateArray: String[];
  timeArray: String[];
  selDate: String;
  selTime: String;

  ngOnInit() {
    this.dateArray = this.getAvailableDate();
    this.timeArray = this.getAvailableTime();
  }

  onClickServeOption(option: ServeOption) {
    this.serveOption = option;
  }

  onDateChange(targetValue) {
    this.selDate = targetValue;
    this.timeArray = this.getAvailableTime();
  }

  onTimeChange(targetValue) {
    this.selTime = targetValue;
  }

  getAvailableDate(): any {
    var retArray = new Array(3)
    var date = new Date();
    for (var i = 0; i < retArray.length; i ++ ) {
      retArray[i] = this.datetimeFunction.dateToStringWWWDDMM(date);
      date.setDate(date.getDate() + 1);
    }
    return retArray;
  }

  getAvailableTime(): any {
    var retArray = new Array(7)

    retArray[0] = '10:00 am';
    retArray[1] = '10:10 am';
    retArray[2] = '10:20 am';
    retArray[3] = '10:30 am';
    retArray[4] = '10:40 am';
    retArray[5] = '10:50 am';
    retArray[6] = '11:00 am';
    
    return retArray;
  }
}

enum ServeOption {
  Pickup = 1,
  Delivery,
  Hall,
}