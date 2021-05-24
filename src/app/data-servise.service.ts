import { Injectable, OnInit } from '@angular/core';
import * as data from '../data.json';
@Injectable({
  providedIn: 'root',
})
export class DataServiseService implements OnInit {
  dataLine: any = (data as any).default;

  constructor() {}
  ngOnInit() {}

  dataLine1() {
    let ltvLiftLineOne = [];
    this.dataLine.forEach((e) => {
      if (e.prevOrders === '1') {
        ltvLiftLineOne.push(e.ltvLift);
      }
    });
    return ltvLiftLineOne;
  }
  dataLine2() {
    let ltvLiftLineTwo = [];

    this.dataLine.forEach((e) => {
      if (e.prevOrders === '2') {
        ltvLiftLineTwo.push(e.ltvLift);
      }
    });
    return ltvLiftLineTwo;
  }
  dataLine3() {
    let ltvLiftLineThree = [];

    this.dataLine.forEach((e) => {
      if (e.prevOrders === '3') {
        ltvLiftLineThree.push(e.ltvLift);
      }
    });
    return ltvLiftLineThree;
  }
  dataLine4() {
    let ltvLiftLineFour = [];

    this.dataLine.forEach((e) => {
      if (e.prevOrders === '4+') {
        ltvLiftLineFour.push(e.ltvLift);
      }
    });
    return ltvLiftLineFour;
  }
}
