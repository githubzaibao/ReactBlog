import React,{Component} from 'react'
import {
    Link
} from 'react-router-dom'

class Topics extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/rendering`}>Rendering with React </Link>
                    </li>
                    <li><Link to={`${this.props.match.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/props-v-state`}>Props v. State</Link>
                    </li>
                </ul>
            </div>

        )
    }
}

export default Topics;