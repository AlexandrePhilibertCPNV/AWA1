import { useEffect, useRef } from "react";
import { Chart, ChartConfiguration, ChartTooltipItem } from "chart.js";

export const SalesDonutChart = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    let config: ChartConfiguration = {
      type: "doughnut",
      data: {
        labels: ["Effectué", "Restant"],
        datasets: [
          {
            backgroundColor: ["#ed64a6", "#eee"],
            borderColor: ["#ed64a6", "#eee"],
            data: [76, 24],
            fill: false,
            barThickness: 8,
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem: ChartTooltipItem, data: any) {
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

    new Chart(ref.current.getContext("2d")!, config);
  }, []);

  return <canvas ref={ref} width="400" height="400"></canvas>;
};
