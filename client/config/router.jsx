import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'

import TopicList from '../views/top-list/index.jsx'
import TopicDetail from '../views/top-detail/index.jsx';

export default () => [
    <Route path='/' render = {
        () => <Redirect to="/list"></Redirect>
    } key="first" exact />,
    <Route path='/list' component={TopicList} 
        key="list"
    />, 
    <Route path="/detail" component={TopicDetail} 
        key="detail"
    />
]