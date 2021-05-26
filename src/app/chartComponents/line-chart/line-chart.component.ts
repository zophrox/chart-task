import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import {
  DataServiseService,
  IJsonDataItem,
  IParsedDataItem,
} from 'src/app/data-servise.service';

import * as Utils from '../../../app/utils';
// import  * as Utils  from 'chart.js/types/utils'
Chart.register(...registerables);
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  canvas: any;
  cxt: any;
  line1: any = '';
  @ViewChild('canvasRef', { static: false }) canvasRef: ElementRef;

  labels = [1, 2, 3, 4, 5];

  datasets: IJsonDataItem[] = [
    {
      id: 1,
      label: 'My First dataset',
      data: [],
      // data: this.dataService.dataLine4(),
      borderColor: Utils.CHART_COLORS.green,
      backgroundColor: Utils.CHART_COLORS.green,
      fill: true,
    },
    {
      id: 2,
      label: 'My Second dataset',
      data: [],
      // data: this.dataService.dataLine3(),
      borderColor: Utils.CHART_COLORS.yellow,
      backgroundColor: Utils.CHART_COLORS.yellow,
      fill: true,
    },

    {
      id: 3,
      label: 'My Third dataset',
      data: [],
      // data: this.dataService.dataLine2(),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.CHART_COLORS.red,
      fill: true,
    },
    {
      id: 4,
      label: 'My Fourth dataset',
      data: [],
      // data: this.dataService.dataLine1(),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.CHART_COLORS.blue,
      fill: true,
    },
  ];

  constructor(private dataService: DataServiseService) {}

  ngOnInit(): void {
    this.dataService.getFileData$().subscribe((dataLine: IParsedDataItem[]) => {
      // this.dataService.dataLine1();
      dataLine.forEach((line) => {
        let item;
        switch (line.prevOrders) {
          case '1':
            item = this.datasets.find((i) => i.id === 4);
            item.data.push(line.ltvLift);
            break;
          case '2':
            item = this.datasets.find((i) => i.id === 3);
            item.data.push(line.ltvLift);
            break;
          case '3':
            item = this.datasets.find((i) => i.id === 2);
            item.data.push(line.ltvLift);
            break;
          case '4+':
            item = this.datasets.find((i) => i.id === 1);
            item.data.push(line.ltvLift);
            break;
        }
      });

      // this.datasets.forEach((item: IJsonDataItem) => {
      //   // if ()
      //   item;
      //   dataLine;
      // });
    });
  }

  ngAfterViewInit() {
    this.createLineChart(this.datasets, this.labels, 'lineChart');
  }

  private createLineChart(datasets, labels, idChart) {
    // this.canvas = document.getElementById(idChart);
    this.canvas = this.canvasRef.nativeElement;
    this.cxt = this.canvas.getContext('2d');
    let chart = new Chart(this.cxt, {
      type: 'line',
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Line Chart Task',
          },
          tooltip: {
            callbacks: {
              // label:function () {

              //   return "string"
              // },
              footer: function () {
                let value = 'This is footer';
                return value;
              },
            },
            mode: 'index',
          },
        },
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false,
        },
        scales: {
          y: {
            stacked: false,
            title: {
              display: true,
              text: 'Value',
            },
          },
        },
      },
    });
  }
}
