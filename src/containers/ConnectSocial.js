import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  View,
  Text,
  AppState
} from 'react-native'
import { connect } from 'react-redux'

class ConnectSocial extends Component {

  constructor (props) {
    super(props)
    this.state = {

    }

  }

  componentDidMount () {
    this.props.navigator.toggleTabs({
      to: 'hidden',
      animated: false
    })
  }

  componentWillReceiveProps (nextProps) {

  }

  componentWillUnmount () {
    this.props.navigator.toggleTabs({
      to: 'shown',
      animated: false
    })
  }

  render () {
    return (
      <View style={styles.flexible}>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  flexible: {
    flexGrow: 1
  },
})

ConnectSocial.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps)(ConnectSocial)
