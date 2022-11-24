// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    cash: 2000,
  }

  deductedAmount = value => {
    const {cash} = this.state

    if (cash >= value) {
      this.setState(prevState => ({
        cash: prevState.cash - value,
      }))
    } else {
      alert('No Enough Money')
    }
  }

  render() {
    const {cash} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    return (
      <div className="mainBgContainer">
        <div className="BgContainer">
          <div className="blue-Container">
            <div className="name-container">
              <button type="button" className="letter-button">
                {initial}
              </button>
              <h1 className="name">{name}</h1>
            </div>

            <div className="balance-container">
              <p className="balance-text">Your Balance</p>
              <p className="cash">{cash}</p>
            </div>
            <p className="para-inRupee">In Rupees</p>

            <p className="Withdraw-Text">Withdraw</p>
            <p className="rupee-text">CHOOSE SUM (IN RUPEES)</p>

            <ul className="list-buttons">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  denominationList={eachItem}
                  key={eachItem.id}
                  deductAmount={this.deductedAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
