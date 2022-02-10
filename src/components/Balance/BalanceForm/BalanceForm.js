import { useState } from 'react'
import s from './BalanceForm.module.scss'

// const BalanceForm = () => {
//   return (
//     <form className={s.form}>
//       <label className={s.label}>Баланс:</label>
//       <input className={s.input} placeholder="00.00 UAH"></input>
//       <button className={s.btn} type="submit">
//         Подтвердить
//       </button>
//     </form>
//   )
// }

const BalanceForm = () => {
  const [value, setValue] = useState('')

  const handleInputChange = e => {
    const value = e.currentTarget.value
    setValue(value)
    console.log(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    // onSubmit()
    console.log('submit')
  }
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>Баланс:</label>
      <input
        className={s.input}
        placeholder="00.00"
        name="balance"
        type="number"
        value={value}
        onChange={handleInputChange}
      ></input>
      <span className={s.span}>UAH</span>
      <button className={s.btn} type="submit">
        Подтвердить
      </button>
    </form>
  )
}

export default BalanceForm
