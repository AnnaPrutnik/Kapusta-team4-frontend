import { useEffect, useState } from 'react'
import sprite from '../../../images/Report/categories.svg'
import s from '../../../styles/component/ReportView/CategoryStats/ReportCategoryItem.module.scss'

function ReportCategoryItem({ data: items, onClick }) {
  const [currentCategory, setCurrentCategory] = useState(null)
  const sortedItems = [...items].sort((a, b) => b.sum - a.sum)

  useEffect(() => {
    if (items) {
      const value = items.length > 0 ? sortedItems[0].categoryId._id : null
      setCurrentCategory(value)
      onClick(value)
    }
  }, [items])

  const handleClick = e => {
    const id = e.currentTarget.dataset.id
    setCurrentCategory(id)
    onClick(id)
  }

  return (
    <ul className={s.list}>
      {items && items.length === 0 ? (
        <p className={s.text}>За данный период транзакций нет</p>
      ) : (
        items &&
        sortedItems.map(item => (
          <li key={item.categoryId._id} className={s.item}>
            <p className={s.sum}>
              {new Intl.NumberFormat('ru-RU', {
                minimumFractionDigits: 2,
              }).format(item.sum)}
            </p>
            <div
              className={
                item.categoryId._id === currentCategory ? s.active : s.thumb
              }
              onClick={handleClick}
              data-id={item.categoryId._id}
            >
              {
                <svg className={s.icon}>
                  <use href={`${sprite}#${item.categoryId._id}`} />
                </svg>
              }
            </div>
            <h3 className={s.category}>{item.categoryId.category}</h3>
          </li>
        ))
      )}
    </ul>
  )
}

export default ReportCategoryItem
