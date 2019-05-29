import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component {

    //static contextType = LanguageContent
    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'ตกลง'
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        
        //const text = this.context === 'english' ? 'Submit' : 'ตกลง'

        return (
            //<button className="ui button primary">{text}</button>

            <ColorContext.Consumer>
                {(color) => this.renderButton(color) }
            </ColorContext.Consumer>
        )
    }
}

export default Button