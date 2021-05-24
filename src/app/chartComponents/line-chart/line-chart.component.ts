import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { DataServiseService } from 'src/app/data-servise.service';

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
 
  @ViewChild('canvasRef', { static: false }) canvasRef: ElementRef;

  labels = [1,2,3,4,5];
  

  datasets = [
    {
      label: 'My Fourth dataset',
      data: this.dataService.dataLine4(),
      borderColor: Utils.CHART_COLORS.green,
      backgroundColor: Utils.CHART_COLORS.green,
      fill: true,
    },
    {
      label: 'My Third dataset',
      data: this.dataService.dataLine3(),
      borderColor: Utils.CHART_COLORS.yellow,
      backgroundColor: Utils.CHART_COLORS.yellow,
      fill: true,
    },
 
    {
      label: 'My Second dataset',
      data: this.dataService.dataLine2(),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.CHART_COLORS.red,
      fill: true,
    },
      {
      label: 'My First dataset',
      data: this.dataService.dataLine1(),
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.CHART_COLORS.blue,
      fill: true,
    }
  ];

  constructor(private dataService:DataServiseService) {}

  ngOnInit(): void {
    // this.createLineChart(this.datasets,this.labels,"lineChart")

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
            text: 'Chart.js Line Chart',
          },
          tooltip: {
            // mode: 'index',
            // callbacks:{
      
            //     label:function(item,everithing){
                    
            //     }
      
            // }
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
