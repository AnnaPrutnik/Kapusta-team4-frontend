import { VictoryChart, VictoryAxis, VictoryBar } from 'victory'

function DesktopChart({ data, options, labelsStyle, colors }) {
  const { fontSize, paddingChart, heightChart, cornerRadiusChart } = options
  const labelFont = { ...labelsStyle, fontSize }
  const n = data.length
  let ratio = n < 5 ? 0.3 : 0.66
  let domainPadding = { x: [3000 / (2 * n), 350 / n] }
  const cornerRadius = n > 5 ? { topLeft: 5, topRight: 5 } : cornerRadiusChart

  if (n === 1) {
    ratio = 3
    domainPadding = { x: [50, 50] }
  }
  return (
    <VictoryChart
      height={heightChart}
      domainPadding={domainPadding}
      padding={paddingChart}
    >
      {data.map(category => (
        <VictoryAxis
          dependentAxis
          key={category.description}
          tickCount={8}
          style={{
            tickLabels: {
              display: 'none',
            },
            axis: { stroke: 'transparent' },
            grid: {
              stroke: colors.stroke,
              strokeWidth: 0.5,
            },
          }}
        />
      ))}
      <VictoryAxis
        style={{
          tickLabels: { ...labelFont, transform: 'translate(0, -7)' },
          axis: { stroke: colors.stroke },
        }}
        tickCount={8}
      />
      <VictoryBar
        data={data}
        x="description"
        y="total"
        sortKey="total"
        sortOrder="descending"
        alignment="middle"
        barRatio={ratio}
        labels={({ datum }) => `${datum.total} грн`}
        style={{
          labels: { ...labelFont, transform: 'translate(0, 7)' },
          data: {
            fill: ({ index }) =>
              (index + 1) % 3 === 1 ? colors.main : colors.secondary,
          },
        }}
        cornerRadius={cornerRadius}
      />
    </VictoryChart>
  )
}

export default DesktopChart
