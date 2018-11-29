import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

import HomeIcon from '@material-ui/icons/home'
import {
    topicPrimaryStyle,
    topicSecondaryStyles,
} from './styles'

const Primary = ({ classes, topic, ...rest }) => {
    return (
        <div className= {classes.root}>
            <span className={classes.tab}>{topic.tab}</span>
            <span className={classes.title}>{topic.title}</span>
        </div>
    )
}

const Secondary = ({ classes, topic, ...rest }) => (
    <span className={classes.root}>
        <span className={classes.userName}>{topic.username}</span>
        <span className={classes.count}>
            <span className={classes.accentColor}>{topic.reply_count}</span>
            <span>/</span>
            <span>{topic.visit_count}</span>
        </span>
        <span>创建时间: {topic.create_at}</span>
    </span>
)

const StyledPrimary = withStyles(topicPrimaryStyle)(Primary)
const StyledSecondary = withStyles(topicSecondaryStyles)(Secondary)

const TopicListItem = ({ onClick, topic }) => (
    <ListItem button={true} onClick={onClick}>
        <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/remy.jpg" />
        </ListItemAvatar>
        <ListItemText 
            primary={ <StyledPrimary topic={topic} /> }
            secondary={ <StyledSecondary topic={topic} /> }
        />
    </ListItem>
    // <div>
    //     {/* <ListItemAvatar>
    //          <Avatar alt="Remy Sharp" src="/static/images/remy.jpg" />
    //      </ListItemAvatar>
    //      <ListItemText 
    //          primary={ <StyledPrimary topic={topic} /> }
    //          secondary={ <StyledSecondary topic={topic} /> }
    //      /> */}
    //      this is a test
    // </div>
)

Primary.propTypes = {
    topic: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}
Secondary.propTypes = {
    topic: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}

TopicListItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    topic: PropTypes.object.isRequired,
}
    
export default TopicListItem
