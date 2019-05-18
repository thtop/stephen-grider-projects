import React from 'react'
import ReactDOM from 'react-dom'
import ApprovalCard from './ApprovalCard'
import CommentDetail from './CommentDetail'
import faker from 'faker'

const App = () => {

    const moment = require('moment');

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                </div>
                <p>Are you sure you want to do this?</p>

            </ApprovalCard>
                
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()}
                    author={faker.name.firstName()}
                    timeAgo={moment(new Date(), 'YYYYMMDD').fromNow()}
                    comment={faker.lorem.words()}
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))