import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  standalone: true,
  selector: 'app-test-chart',
  imports: [CommonModule, NgChartsModule],
  templateUrl: './test-chart.component.html',
  styleUrl: './test-chart.component.scss',
})
export class TestChartComponent {
  public chartType: 'bar' = 'bar';

  public chartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Electronics', 'Groceries', 'Clothing', 'Medical', 'Cosmetics'],
    datasets: [
      {
        label: 'Product Sales',
        data: [140, 90, 175, 24, 123],
        barThickness: 50,

        borderRadius: 2,
        backgroundColor: [
          '#42A5F5',
          '#66BB6A',
          '#FFA726',
          '#14469c',
          '#0F2943',
        ],
      },
    ],
  };

  public chartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: true,
      },
      title: {
        display: true,
        text: 'Sales per Category',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Category',
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        title: {
          display: true,
          text: 'Sales',
        },
      },
    },
  };
}
