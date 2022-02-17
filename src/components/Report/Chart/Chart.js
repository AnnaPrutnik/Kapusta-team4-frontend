import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { getStatsCategoriesForMonth } from '../../../services/statisticApi/statisticApi'
import DesktopChart from './DesktopChart'
import MobileChart from './MobileChart'
import s from './Chart.module.scss'
import {
  colors,
  tabletOptions,
  desktopOptions,
  labelsStyle,
} from '../../../lib/chartsOptions'

function Chart({ id, month, year }) {
  const [stats, setStats] = useState([])
  const isDesktop = useMediaQuery({ minWidth: 1280 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279.98 })
  const isMobile = useMediaQuery({ maxWidth: 767.98 })

  useEffect(() => {
    getStats()
  }, [id, month])

  const getStats = async () => {
    const result = await getStatsCategoriesForMonth(month, year, id)
    setStats(result.data)
  }

  return (
    <>
      {stats.length > 0 && (
        <div className={s.chart}>
          {isDesktop && (
            <DesktopChart
              data={stats}
              options={desktopOptions}
              labelsStyle={labelsStyle}
              colors={colors}
            />
          )}
          {isTablet && (
            <DesktopChart
              data={stats}
              options={tabletOptions}
              labelsStyle={labelsStyle}
              colors={colors}
            />
          )}
          {isMobile && (
            <MobileChart
              data={stats}
              labelsStyle={labelsStyle}
              colors={colors}
            />
          )}
        </div>
      )}
    </>
  )
}
export default Chart
