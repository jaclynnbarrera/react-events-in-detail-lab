import React from 'react'

class CoordinatesButton extends React.Component {

    handleClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render () {
	    return (
		    <div>
                <button
                onClick={this.handleClick}>
                    Coordinates Button!
                </button>
		    </div>
		)
	}
}

export default CoordinatesButton
