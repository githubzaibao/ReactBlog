import React, {Component} from 'react'
import {Card} from 'antd'

class MyArticle extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <Card title="Card title" extra={<a href="#">More</a>} style={{marginBottom: '5px'}}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        );
    }
}

export default MyArticle;