'use strict'
import React from "react";
import ReactDOM from "react-dom";
import './search.less';
import logo from './images/logo.png';
// import '../../common/index';
import { a } from './tree-shaking';

if (false) {
    a();
}

class Search extends React.Component {

    constructor() {
        super(...arguments);

        this.state = {
            Text: null
        }
    }

    loadComponent() {
        import('./dynamic.js').then((Text) => {
            this.setState({
                Text: Text.default
            });
        });
    }
    render() {

        const { Text } = this.state;
        return <div className="search-text">
            {
                Text ? <Text /> : null
            }
            搜索文字哈哈 <img src={logo} onClick={this.loadComponent.bind(this)} />
        </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)
