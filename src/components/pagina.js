import React, { Component } from 'react';
import Menu from "./menu";
import TweetList from "./tweetlist";
import TrendList from "./trendlist";
import MenuObj from './menuObj';
import Tweet from "./tweet";
import Trend from "./trend";


class Pagina extends Component {

    state = {
        menu: [],
        tweets: [],
        trends: [],
        tofollow: []
    }


    componentDidMount() {
        let url = 'https://gist.githubusercontent.com/josejbocanegra/36d259fe4a9908c2bda367b5ee9f4ed6/raw/63f9d7c460d09cb22f4299b879b1b868159efff3/tweets.json';
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                this.setState({ menu: data.menu });
                this.setState({ tweets: data.tweets });
                this.setState({ trends: data.trends });
                this.setState({ tofollow: data.tofollow });
            });
    }

    render() {

        console.log(this)

        return (
            <div classname="container">
                <div classname="col-4">
                    {this.state.menu.map( e => <MenuObj value = {e}/>)}
                </div>
                <div classname="col-4">
                    {this.state.tweets.map( e => <Tweet value = {e}/>)}
                </div>
                <div classname="col-4">
                    {this.state.trends.map( e => <Trend value = {e}/>)}
                </div>
            </div>
        );
    }
}

export default Pagina;