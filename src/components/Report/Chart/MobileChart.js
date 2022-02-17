import { VictoryChart, VictoryAxis, VictoryBar, VictoryLabel } from 'victory'

function MobileChart({ data, labelsStyle, colors }) {
  const n = data.length

  const heightChart = n > 2 ? n * 75 : 200
  let ratioChart = n > 5 ? 0.5 : 0.9

  if (n === 1) {
    ratioChart = 3
  }

  return (
    <VictoryChart
      horizontal
      height={heightChart}
      domainPadding={{ y: [0, 22] }}
    >
      <VictoryAxis
        style={{
          axis: { stroke: 'transparent' },

          tickLabels: {
            ...labelsStyle,
            textAnchor: 'start',
            fontSize: '17px',
            transform: 'translate(15,-15)',
          },
        }}
      />
      <VictoryBar
        data={data}
        x="description"
        y="total"
        sortKey="total"
        sortOrder="ascending"
        alignment="end"
        barRatio={ratioChart}
        labels={({ datum }) => `${datum.total} грн`}
        style={{
          labels: {
            ...labelsStyle,
            fontSize: '15px',
            transform: 'translate(0, 12)',
          },
          data: {
            fill: ({ data, index }) =>
              data.length === 1
                ? colors.main
                : (index + 1) % 3 === 1
                ? colors.main
                : colors.secondary,
          },
        }}
        cornerRadius={{ topLeft: 11, topRight: 11 }}
      />
    </VictoryChart>
  )
}

export default MobileChart
