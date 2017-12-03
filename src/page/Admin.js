import React,{Component} from 'react'

class Admin extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {count: 0};
    }

    componentWillMount() {
        console.log(this)
        console.log("componentWillMount")
    }

    componentWillReceiveProps() {

        console.log("componentWillReceiveProps")

    }

    componentDidMount() {
        this.state.count = this.state.count + 1;
        console.log("componentDidMount")

    }

    componentDidUpdate() {
        console.log("componentDidUpdate")

    }

    componentWillUnMount() {
        console.log("componentWillUnMount")

    }

    componentDidUnMount() {
        console.log("componentDidUnMount")

    }

    render() {
        return (
            <div>Admin:${this.state.count}</div>
        )
    }
}

export default Admin;