import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

// import * as data from '../data.json';

export interface IJsonDataItem {
  id: number;
  label: string;
  data?: any[];
  borderColor: string;
  backgroundColor: string;
  fill: boolean;
}

export interface IParsedDataItem {
  ltvLift: string;
  prevOrders: string;
  rating: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private getFileData$$ = new Subject<any>();

  public getFileData$(): Observable<IParsedDataItem[]> {
    return this.getFileData$$.asObservable();
  }

  public setFileData$(val: IParsedDataItem[]): void {
        this.getFileData$$.next(val);
  }

  constructor() {}

  // dataLine1() {
  //   let ltvLiftLineOne: string[] = [];
  //   if (this.dataLine) {
  //     this.dataLine.forEach((e) => {
  //       if (e.prevOrders === '1') {
  //         ltvLiftLineOne.push(e.ltvLift);
  //       }
  //     });
  //     return ltvLiftLineOne;
  //   }
  // }

  // dataLine2() {
  //   let ltvLiftLineOne = [];
  //   if (this.dataLine) {
  //     this.dataLine.forEach((e) => {
  //       if (e.prevOrders === '2') {
  //         ltvLiftLineOne.push(e.ltvLift);
  //       }
  //     });
  //     return ltvLiftLineOne;
  //   }
  // }

  // dataLine3() {
  //   let ltvLiftLineOne = [];
  //   if (this.dataLine) {
  //     this.dataLine.forEach((e) => {
  //       if (e.prevOrders === '3') {
  //         ltvLiftLineOne.push(e.ltvLift);
  //       }
  //     });
  //     return ltvLiftLineOne;
  //   }
  // }

  // dataLine4() {
  //   let ltvLiftLineOne = [];
  //   if (this.dataLine) {
  //     this.dataLine.forEach((e) => {
  //       if (e.prevOrders === '4+') {
  //         ltvLiftLineOne.push(e.ltvLift);
  //       }
  //     });
  //     return ltvLiftLineOne;
  //   }
  // }
}
