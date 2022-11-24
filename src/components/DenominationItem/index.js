// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationList, deductAmount} = props
  const {value} = denominationList

  const onClickDeductAmount = () => {
    deductAmount(value)
  }

  return (
    <li className="list-items">
      <button type="button" className="button" onClick={onClickDeductAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
