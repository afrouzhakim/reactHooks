import React, {Component} from 'react';

class Message extends Component {
    constructor () {
        super()
        this.state = {
            message: "welcome visitor"
        }
    }
    render() {
        return (
            <div>
                <h1>Welcome {this.state.message}</h1>
                <button>Subscribe</button>
            </div>
        )
    }
}

export default Message