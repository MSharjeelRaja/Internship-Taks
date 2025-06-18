import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule, BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  standalone: true,
  selector: 'app-test-chart',
  imports: [CommonModule, NgChartsModule],
  templateUrl: './test-chart.component.html',
  styleUrl: './test-chart.component.scss',
})
export class TestChartComponent implements OnChanges {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  public chartType: 'bar' = 'bar';
  @Input() cartdata: any[] = [];

  public chartData: ChartConfiguration<'bar'>['data'] = {
    datasets: [
      {
        label: 'Product Sales',
        data: [],
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cartdata'] && this.cartdata) {
      const categoryMap: { [key: string]: number } = {};

      for (const item of this.cartdata) {
        const category = item.Category || 'Unknown';
        categoryMap[category] = (categoryMap[category] || 0) + 1;
      }

      this.chartData.labels = Object.keys(categoryMap);
      this.chartData.datasets[0].data = Object.values(categoryMap);
    }
  }
}
