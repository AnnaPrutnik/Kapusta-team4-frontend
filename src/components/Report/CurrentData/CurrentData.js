import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import months from './month.json'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import s from './CurrentData.module.scss'

const CurrentData = () => {
  const handleRight = () => {}

  const handleLeft = () => {}

  return (
    <div className={s.wrap}>
      <span className={s.label}>Текущий период:</span>
      <div className={s.wrapBtn}>
        <button className={s.btn} type="button" onClick={handleLeft}>
          <MdKeyboardArrowLeft className={s.icon} />
        </button>
        <p className={s.title}>
          НОЯБРЬ 2021
          {/* {month}.{year} */}
        </p>
        <button className={s.btn} type="button" onClick={handleRight}>
          <MdKeyboardArrowRight className={s.icon} />
        </button>
      </div>
    </div>
  )
}

export default CurrentData
