import { Chart, ChartConfiguration } from "chart.js";
import { useEffect } from "react";

type SalesDonutChartProps = {
  datasets: any;
  labels: any;
};

export const SalesDonutChart = ({ labels, datasets }: SalesDonutChartProps) => {
  useEffect(() => {
    const config: ChartConfiguration = {
      type: "doughnut",
      data: {
        labels,
        datasets,
      },
      options: {
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem: any, data: any) {
              const datasetIndex = tooltipItem.datasetIndex!;
              const index = tooltipItem.index!;

              const sum = data.datasets![datasetIndex].data.reduce(
                (acc: number, cur: number) => acc + cur
              );
              const value = data.datasets[datasetIndex].data[index];

              return `${data.labels[index]}: ${Number(
                (value / sum) * 100
              ).toFixed(0)}%`;
            },
          },
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              display: false,
              scaleLabel: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    };
    new Chart(
      document.getElementById("sales-donut-chart") as HTMLCanvasElement,
      config
    );
  }, [datasets, labels]);

  return <canvas id="sales-donut-chart" />;
};
