import { useState } from 'react'
import s from './BalanceForm.module.scss'
import BalanceNotifications from '../BalanceNotification/BalanceNotification'

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
//конфликт 1 часть начало!!! 
  //tut budet logika - было на дев 
  // let balance = 5 //чтобы модалка появилась, поставить 0
  // const result = () => {
   //  if (balance > 0) {
    //   return false
   // //  }
    // return true
 //  }
  //конфликт 1 часть конец!!! 


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

        //конфликт 2 часть начало!!! 
     // <input className={s.input} placeholder="00.00 UAH"></input>
      //{result() && <BalanceNotifications />}
        //конфликт 2 часть конец!!! 

      <button className={s.btn} type="submit">
        Подтвердить
      </button>
    </form>
  )
}

export default BalanceForm
