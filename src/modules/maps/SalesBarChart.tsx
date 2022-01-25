import { HorizontalBar } from "react-chartjs-2";

type SalesBarChartProps = {
  datasets: any;
  labels: any;
};

export const SalesBarChart = ({ datasets, labels }: SalesBarChartProps) => {
  return (
    <HorizontalBar
      data={{ datasets, labels }}
      options={{
        responsive: true,
        legend: {
          display: false,
        },
        plugins: {
          legend: {
            position: "right",
          },
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem: any, data: any) {
              const datasetIndex = tooltipItem.datasetIndex!;
              const index = tooltipItem.index!;
              const value = data.datasets[datasetIndex].data[index];

              return `${Number(value).toFixed(0)}% of target sales`;
            },
          },
        },
        scales: {
          xAxes: [
            {
              // display: false,
              scaleLabel: {
                display: false,
              },
              ticks: {
                min: 0,
                stepSize: 20,
                max: 100,
              },
            },
          ],
          yAxes: [
            {
              // display: false,
              scaleLabel: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      }}
    />
  );
};
