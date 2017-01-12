import React from 'react';
var ReactRedux = require('react-redux');
import BEMHelper from 'react-bem-helper';
import ItemActions from '../actions/itemActions.js'

var classes = new BEMHelper({
    name: 'App',
    prefix: 'b-'
});
require('../../css/components/App.less')
const mountains = require('../../images/glacier_peak.jpg');

var App = React.createClass({
    getDefaultProps() {
        return {
            items: []
        };
    },

    componentDidMount() {
        this.props.loadAllItems();
    },

    render() {
        let items = this.props.items.map(item => {
            return (
                <li>{item.name}</li>
            );
        })
        return (
            <div {...classes()}>
                <h1 {...classes('hello')}>hello!</h1>
                <ul>
                    {items}
                </ul>
                <img src={mountains} />
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        items: state.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadAllItems() {
            dispatch(ItemActions.loadAll())
        }
    }
}

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);
