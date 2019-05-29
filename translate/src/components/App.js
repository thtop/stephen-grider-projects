import React from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import Colorcontext from '../contexts/ColorContext'

class App extends React.Component {

    state = { language: 'english'}

    onLanguageChange = language => {
        this.setState({ language })
    }

    render() {
        return (
            <div className="ui container">
                <div style={{ cursor: 'pointer' }}>
                    Select a language: 
                    <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag th" onClick={() => this.onLanguageChange('thai')} />
                </div>
                <Colorcontext.Provider value="green">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate  />
                    </LanguageContext.Provider>
                </Colorcontext.Provider>
                
            </div>
        )
    }
}

export default App