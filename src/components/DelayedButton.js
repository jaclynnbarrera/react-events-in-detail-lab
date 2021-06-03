import React from 'react'

class DelayedButton extends React.Component {

    handleClick = (e) => {
        e.persist()
        window.setTimeout(this.props.onDelayedClick(e), this.props.delay)
    }

render () {
	return (
        <div>
            <button
                onClick={this.handleClick}>
                    Delayed Button!
                </button>
            </div>
		)
	}

}

export default DelayedButton