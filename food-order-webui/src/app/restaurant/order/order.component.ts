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
  selOrderList: any[];

  subtotalPrice: number = 0;
  deliveryFee: number = 0;
  totalPrice: number = 0;

  ngOnInit() {
    this.dateArray = this.getAvailableDate();
    this.timeArray = this.getAvailableTime();
    this.selOrderList = this.getOrderList();

    this.updatePrice();
  }

  updatePrice() {
    this.subtotalPrice = 0;
    this.selOrderList.forEach(element => {
      this.subtotalPrice += element.price;
    });
    this.totalPrice = this.subtotalPrice
    this.totalPrice = this.subtotalPrice + this.deliveryFee;
  }

  onClickServeOption(option: ServeOption) {
    this.serveOption = option;
    if (option == ServeOption.Delivery) {
      this.deliveryFee = 5;
    } else {
      this.deliveryFee = 0;
    }
    this.updatePrice();
  }

  onDateChange(targetValue) {
    this.selDate = targetValue;
    this.timeArray = this.getAvailableTime();
  }

  onTimeChange(targetValue) {
    this.selTime = targetValue;
  }

  onCheckout() {
    
  }

  onMenuCountChange(order, value) {
    order.count = value;
    order.price = order.unitprice * value;
    this.updatePrice();
  }
  onClickRemoveOrder(order) {
    const index: number = this.selOrderList.indexOf(order);
    if (index !== -1) {
        this.selOrderList.splice(index, 1);
    }
    this.updatePrice();
  }

  onItemClick(menu) {
    alert("alert" + menu.name);
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
    return [
      '10:00 am', '10:10 am', '10:20 am', '10:30 am', '10:40 am', '10:50 am', '11:00 am'
    ];
  }

  getOrderList(): any {
    return [
      {name: 'pizza', unitprice: 20.00, count:2, price: 40.00},
      {name: 'coke', unitprice: 50.00, count:1, price: 5.00}
    ];
  }
}

enum ServeOption {
  Pickup = 1,
  Delivery,
  Seat,
}