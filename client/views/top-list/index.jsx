import React from 'react'
import {
    observer,
    inject
} from 'mobx-react'

import PropTypes from 'prop-types'
import AppState from '../../store/app-state'
import Helmet from 'react-helmet'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab';
import Container from '../layout/container.jsx'
import List from '@material-ui/core/List'
import TopicListItem from './list-item'

@inject('appState') @observer

class TopicList extends React.Component {
    constructor() {
        super()
        this.state = {
            tabIndex: 0,
        }
        this.changeTab = this.changeTab.bind(this)
        this.listItemClick = this.listItemClick.bind(this)
    }
    bootstrap() {
        // 这个函数时用于后端的异步请求数据后渲染，对于前端页面没什么用。后端在渲染该组件前会执行这个函数。
        return new Promise((resolve) => {
            setTimeout(() => {
                this.props.appState.count = 3;
                resolve(true)
            })
        })
    }
    render() {
        const { tabIndex } = this.state
        const topic = {
            title: 'This is title',
            username: 'Jocky',
            reply_count: 20,
            visit_count: 500,
            create_at: '1949/10/1',
            tab: 'share',
        }
        return (
            <Container>
                <Helmet>
                    <title>This is topic list</title> 
                    <meta name="description" content="This is description" />
                </Helmet>
                
                <Tabs value={tabIndex} onChange={this.changeTab}>
                    <Tab label="全部" />
                    <Tab label="精华" />
                    <Tab label="分享" />
                    <Tab label="问答" />
                    <Tab label="招聘" />
                    <Tab label="客户端测试" />
                </Tabs>
                <List>
                    <TopicListItem onClick={this.listItemClick} topic={topic} />
                </List>
            </Container>
        )
    }

    changeTab(event, index) {
        this.setState({
            tabIndex: index
        })
    }

    listItemClick() {

    }
}

TopicList.propTypes = {
    appState: PropTypes.instanceOf(AppState)
}
export default TopicList
// 上面的 propTypes 是一个AppState的实例，并且是必须传入的。