import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Receipt from '../../molecules/Receipt/Receipt'
import MapboxCourier from '../../molecules/Map/Mapbox_Courier'
import MapboxDonor from '../../molecules/Map/Mapbox_Donor'
import {attemptGetLinkedUser} from '../../../store/thunks/user'
import {attemptGetFoodBank} from '../../../store/thunks/foodbank'

export class OrderInProgressPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      foodBankFound: false
    }
  }
  componentDidMount() {
    this.props.attemptGetLinkedUser(this.props.user.linkedUser)
    this.props.attemptGetFoodBank(this.props.user.address)
  }

  render() {
    let donorInfo = this.props.linkedUser
    let courierInfo = this.props.user
    let usernameProp = this.props.match.params.username
    return (
      <div className="welcome-page page">
        <div className="section">
          <div className="container">
            <br />
            <br />
            <h2>Current Order Details Here</h2>
            <Receipt username={usernameProp} />
            {this.props.user.linkedUser !== null ? (
              this.props.user.userType === 'donor' ? (
                <MapboxDonor history={this.props.history} />
              ) : (
                <MapboxCourier history={this.props.history} />
              )
            ) : (
              this.props.history.push('/thankyou')
            )}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    linkedUser: state.linkedUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    attemptGetLinkedUser: linkedUserId =>
      dispatch(attemptGetLinkedUser(linkedUserId)),
    attemptGetFoodBank: donorAddress =>
      dispatch(attemptGetFoodBank(donorAddress))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderInProgressPage)
