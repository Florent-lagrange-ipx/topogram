import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import { FlowRouter } from 'meteor/kadira:flow-router'
import moment from 'moment'

const convertDate = (date) => {
  if ( typeof(date) == 'string' ) return
}

const TopogramListItem = React.createClass({
  getDefaultProps() {
    return {
      title : '',
      _id : '',
      date: new Date()
    }
  },
  render() {

    let parsedDate = (this.props.date) ?  moment(this.props.date).fromNow() : ''
    let url = 'topograms/'+this.props._id

    return (
    <div className={this.props.classNames}>
     <Card>
      <CardHeader
        title={this.props.title}
        subtitle={parsedDate}
      />
      <CardActions>
        <FlatButton
          label="Browse"
          secondary={true}
          href={url}
        />
      </CardActions>
     </Card>
    </div>
  )}
})

export default TopogramListItem
