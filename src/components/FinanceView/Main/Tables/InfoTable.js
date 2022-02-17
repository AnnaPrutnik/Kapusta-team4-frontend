import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import ExitModal from '../../../Modal/ExitModal'
import TableMobile from './TableMobile'
import TableDesktop from './TableDesktop'

function InfoTable({ transactions, deleteTransaction, isExpense }) {
  const [showModal, setShowModal] = useState(false)
  const [transId, setTransId] = useState(null)
  const notMobile = useMediaQuery({ minWidth: 768 })

  const handleClickDelete = e => {
    deleteTransaction(transId)
    handleCloseModal()
  }

  const handleOpenModal = e => {
    setShowModal(true)
    setTransId(e.currentTarget.dataset.id)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setTransId(null)
  }

  return (
    <>
      {notMobile ? (
        <TableDesktop
          transactions={transactions.filter(
            item => item.isExpense === isExpense,
          )}
          deleteTransaction={handleOpenModal}
        />
      ) : (
        <TableMobile
          transactions={transactions}
          deleteTransaction={handleOpenModal}
        />
      )}
      {showModal && (
        <ExitModal
          handleClickLeft={handleClickDelete}
          handleClickRight={handleCloseModal}
          onClose={handleCloseModal}
          modalTitle={'Вы уверены?'}
        />
      )}
    </>
  )
}

export default InfoTable
