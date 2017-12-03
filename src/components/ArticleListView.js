import React, {Component} from 'react'
import {Card, Pagination} from 'antd'
import MyArticle from "./MyArticle";

class MyArticleLisView extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.itemRender = function itemRender(current, type, originalElement) {
            if (type === 'prev') {
                return <a>Previous</a>;
            } else if (type === 'next') {
                return <a>Next</a>;
            }
            return originalElement;
        }
    }

    render() {
        let articlsList = (length) => {
            var res = [];
            for (var i = 0; i < length; i++) {
                res.push(<MyArticle/>)
            }
            return res
        }
        return (
            <div>
                {articlsList(10)}
            </div>
        );
    }
}

export default MyArticleLisView;