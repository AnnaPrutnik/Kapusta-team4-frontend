import s from './Chart.module.scss'

import { VictoryChart, VictoryAxis, VictoryBar } from 'victory'

const paddingChart =
  window.innerWidth >= 1280
    ? { top: 20, bottom: 25, left: 80, right: 80 }
    : { top: 20, bottom: 25, left: 0, right: 0 }

const heightChart = window.innerWidth >= 1280 ? 180 : 250
const fontChart = window.innerWidth >= 1280 ? '5px' : '7px'
const orientationChart = window.innerWidth >= 768 ? false : true

const labelsStyle = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: fontChart,
  lineHeight: 1.167,
  letterSpacing: '0.02em',
  fill: '#52555f',
  padding: 2,
}

const gridsPoint = n => {
  let quantity = null
  if (n > 400) {
    quantity = (Math.trunc(Math.trunc((n - 100) / 8) / 100) + 1) * 100
  } else {
    quantity = (Math.trunc(Math.trunc((n - 100) / 8) / 10) + 1) * 15
  }

  let gridArray = [0]
  for (let i = 1; i < 8; i++) {
    let newGrid = gridArray[i - 1] + quantity
    gridArray.push(newGrid)
  }
  return gridArray
}
gridsPoint(50)

function Chart({ data }) {
  const MaxQuantity = Math.max.apply(
    null,
    data.map(cat => cat.quantity),
  )

  const gridsArray = gridsPoint(MaxQuantity)
  console.log(window.innerWidth)
  return (
    <div className={s.chart}>
      <VictoryChart
        horizontal={orientationChart}
        height={heightChart}
        domainPadding={{ x: [71, 30] }}
        padding={paddingChart}
      >
        {data.map(category => (
          <VictoryAxis
            dependentAxis
            key={category.name}
            tickValues={[...gridsArray]}
            style={{
              tickLabels: {
                display: 'none',
              },
              axis: { stroke: 'transparent' },
              grid: {
                stroke: '#F5F6FB',
                strokeWidth: 0.5,
              },
            }}
          />
        ))}
        <VictoryAxis
          style={{
            tickLabels: labelsStyle,
            axis: { stroke: '#F5F6FB' },
          }}
        />
        <VictoryBar
          data={data}
          x="name"
          y="quantity"
          barRatio={0.66}
          labels={({ datum }) => `${datum.quantity} грн`}
          alignment="middle"
          style={{
            labels: labelsStyle,
            data: {
              fill: ({ index }) =>
                (index + 1) % 3 === 1 ? '#FF751D' : '#FFDAC0',
            },
          }}
          cornerRadius={{ topLeft: 4, topRight: 4 }}
        />
      </VictoryChart>
    </div>
  )
}
export default Chart
