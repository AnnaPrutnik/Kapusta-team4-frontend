import sprite from '../../../images/FinanceView/icons.svg'
import s from '../../../styles/component/FinanceView/Main/InfoTable.module.scss'

function TableDesktop({ transactions, deleteTransaction }) {
  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr className={s.header}>
          <th className={s.head_date}>Дата</th>
          <th className={s.head_description}>Описание</th>
          <th className={s.category}>Категория</th>
          <th className={s.amount}>Сумма</th>
        </tr>
      </thead>
      <tbody className={s.body}>
        {transactions.length > 0 ? (
          <>
            {transactions.map(item => (
              <tr key={item._id} className={s.row}>
                <td className={s.date}>{item.convertDate}</td>
                <td className={s.description}>{item.description}</td>
                <td className={s.category}>{item.categoryId.category}</td>
                {item.isExpense ? (
                  <td className={s.expense}>- {item.transactionAmount} грн.</td>
                ) : (
                  <td className={s.income}>{item.transactionAmount} грн.</td>
                )}
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

export default TableDesktop
