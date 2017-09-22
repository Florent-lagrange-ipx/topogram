import React from 'react'
import Snackbar from 'material-ui/Snackbar'
import { composeWithTracker } from 'react-komposer'
import { Meteor } from 'meteor/meteor'

import MainViz from '/imports/ui/components/mainViz/MainViz.jsx'
import TopogramTitle from '/imports/ui/components/topogramTitle/TopogramTitle.jsx'

const tmpStyle = { }

export class TopogramViewComponent extends React.Component {
  constructor(props) {
    super(props)
    this.toggleSideNav = this.toggleSideNav.bind(this)

    // snackbar
    this.state = {
      open: false,
      message: ''
    }
    this.promptSnackbar = this.promptSnackbar.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)
  }

  componentDidMount() {
    this.props.loadTopogram(this.props.params.topogramId);
    this.props.loadNodes(this.props.params.topogramId);
    this.props.loadEdges(this.props.params.topogramId);
  }

  toggleSideNav() {
    const toggled = this.refs.sideNav.state.open ? false : true
    this.refs.sideNav.setState({ open : toggled })
  }

  promptSnackbar(msg) {
    this.setState({
      open: true,
      message: msg
    })
  }

  handleRequestClose() {
    this.setState({
      open: false,
    })
  }

  render() {
    const { networkVisible, mapVisible } = this.state

    let topogramName = this.props.topogram.name ?
      this.props.topogram.name : ''

    return (
      <div>

      <TopogramTitle
        topogramName={topogramName}
      />

        <MainViz
          nodes={ this.props.nodes }
          edges={ this.props.edges }
        />
        {/*

        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        /> */}
      </div>
    )
  }
}

TopogramViewComponent.propTypes = {
  topogramId: React.PropTypes.string,
  nodes: React.PropTypes.array,
  edges: React.PropTypes.array,
  topogram: React.PropTypes.object
}