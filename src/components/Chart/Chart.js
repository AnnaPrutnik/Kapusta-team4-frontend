import s from './Chart.module.scss'
import { useMediaQuery } from 'react-responsive'
import DesktopChart from './DesktopChart'
import MobileChart from './MobileChart'

const colors = {
  main: '#FF751D',
  secondary: '#FFDAC0',
  stroke: '#F5F6FB',
  font: '#52555f',
}
const tabletOptions = {
  fontSize: '7px',
  paddingChart: { top: 30, bottom: 25, left: 10, right: 10 },
  heightChart: 250,
  cornerRadiusChart: { topLeft: 10, topRight: 10 },
}

const desktopOptions = {
  fontSize: '5px',
  paddingChart: { top: 20, bottom: 25, left: 80, right: 80 },
  heightChart: 180,
  cornerRadiusChart: { topLeft: 7, topRight: 7 },
}

const labelsStyle = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 1.167,
  letterSpacing: '0.02em',
  fill: colors.font,
}

function Chart({ data }) {
  const isDesktop = useMediaQuery({ minWidth: 1280 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279.99 })
  const isMobile = useMediaQuery({ maxWidth: 767.99 })

  return (
    <div className={s.chart}>
      {isDesktop && (
        <DesktopChart
          data={data}
          options={desktopOptions}
          labelsStyle={labelsStyle}
          colors={colors}
        />
      )}
      {isTablet && (
        <DesktopChart
          data={data}
          options={tabletOptions}
          labelsStyle={labelsStyle}
          colors={colors}
        />
      )}
      {isMobile && (
        <MobileChart data={data} labelsStyle={labelsStyle} colors={colors} />
      )}
    </div>
  )
}
export default Chart
