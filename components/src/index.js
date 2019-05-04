import React from 'react'
import ReactDOM from 'react-dom'
import ApprovalCard from './ApprovalCard'
import CommentDetail from './CommentDetail'
import faker from 'faker'

const moment = require('moment');


const App = () => {
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
                    timeAgo={moment().calendar()}
                    comment={faker.lorem.words()}
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))