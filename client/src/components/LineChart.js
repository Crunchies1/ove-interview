import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = ({ xAxisData, yAxisData, title, xLabel, yLabel, color, grid = false }) => {
  const legendOptions = {
    display: false
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: !!title,
      text: title
    },
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      yAxes: [
        {
          scaleLabel: { display: !!yLabel, labelString: yLabel },
          gridLines: { display: grid },
          ticks: { display: false }
        }
      ],
      xAxes: [
        {
          scaleLabel: { display: !!xLabel, labelString: xLabel },
          gridLines: { display: grid },
          ticks: { display: false }
        }
      ]
    }
  }

  return (
        <Line
            data={{
              labels: xAxisData,
              datasets: [
                {
                  borderColor: color,
                  data: yAxisData,
                  fill: false
                }
              ]
            }}
            width={120}
            height={50}
            options={options}
            legend={legendOptions}
        />
  )
}

export default LineChart
