import sprite from '../../../../images/FinanceView/icons.svg'
import s from './TableMobile.module.scss'

function TableMobile({ transactions, deleteTransaction }) {
  return (
    <table className={s.table}>
      <tbody>
        {transactions.length > 0 ? (
          <>
            {transactions.map(item => (
              <tr className={s.row} key={item._id}>
                <td className={s.info}>
                  <div className={s.description}>{item.description}</div>
                  <div className={s.wrap}>
                    <span className={s.date}>{item.convertDate}</span>
                    <span className={s.category}>
                      {item.categoryId.category}
                    </span>
                  </div>
                </td>
                <td>
                  {item.isExpense ? (
                    <span className={s.expense}>
                      {`-${item.transactionAmount} грн.`}
                    </span>
                  ) : (
                    <span className={s.income}>
                      {`${item.transactionAmount} грн.`}
                    </span>
                  )}
                </td>

                <td className={s.delete}>
                  <button
                    className={s.btn}
                    onClick={deleteTransaction}
                    data-id={item._id}
                  >
                    <svg width="18" height="18">
                      <use href={`${sprite}#Delete`}></use>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </>
        ) : (
          <tr className={s.row}>
            <td className={s.text}>За данный период транзакций нет</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default TableMobile
