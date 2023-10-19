import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import {
  DataService,
  IJsonDataItem,
  IParsedDataItem,
} from 'src/app/data.service';

import * as Utils from '../../../app/utils';
// import  * as Utils  from 'chart.js/types/utils'
Chart.register(...registerables);
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  // canvas: any;
  // cxt: any;
  @ViewChild('canvasRef', { static: false }) canvasRef: ElementRef;

  labels = [1, 2, 3, 4, 5];

  public datasets: IJsonDataItem[] = [
    {
      id: 1,
      label: 'My First dataset',
      data: [],
      borderColor: Utils.CHART_COLORS.green,
      backgroundColor: Utils.CHART_COLORS.green,
      fill: false,
    },
    {
      id: 2,
      label: 'My Second dataset',
      data: [],
      borderColor: Utils.CHART_COLORS.yellow,
      backgroundColor: Utils.CHART_COLORS.yellow,
      fill: false,
    },

    {
      id: 3,
      label: 'My Third dataset',
      data: [],
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.CHART_COLORS.red,
      fill: false,
    },
    {
      id: 4,
      label: 'My Fourth dataset',
      data: [],
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.CHART_COLORS.blue,
      fill: false,
    },
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getDataLine();
  }

  ngAfterViewInit() {
    // this.createLineChart(this.datasets, this.labels, 'lineChart');
  }

  getDataLine() {
    this.dataService.getFileData$().subscribe((dataLine: IParsedDataItem[]) => {
      this.datasets.forEach((e) => (e.data = []));
      dataLine.forEach((line) => {
        let item;
        switch (line.prevOrders) {
          case '1':
            item = this.datasets.find((i) => i.id === 4);
            line.ltvLift.forEach(value=>{
              item.data.push(value)
            })
            // item.data.push(line.ltvLift);
            break;
          case '2':
            item = this.datasets.find((i) => i.id === 3);
            line.ltvLift.forEach(value=>{
              item.data.push(value)
            })
            // item.data.push(line.ltvLift);
            break;
          case '3':
            item = this.datasets.find((i) => i.id === 2);
            line.ltvLift.forEach(value=>{
              item.data.push(value)
            })
            // item.data.push(line.ltvLift);
            break;
          case '4':
            item = this.datasets.find((i) => i.id === 1);
            line.ltvLift.forEach(value=>{
              item.data.push(value)
            })
            // item.data.push(line.ltvLift);
            break;
        }
      });

      this.createLineChart(this.datasets, this.labels);
    });
  }
  chart;
  private createLineChart(datasets, labels) {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
    // this.canvas = document.getElementById(idChart);
    const canvas = this.canvasRef.nativeElement;
    const cxt = canvas.getContext('2d');

    const config: any = {
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
    };

    this.chart = new Chart(cxt, config);
  }
}
