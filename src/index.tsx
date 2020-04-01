'use strict';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import { Reloader } from './utils/reload';
import { BusinessCard } from './components/businesscard';
import './theme.scss';
// tslint:disable-next-line: no-empty-interface
interface Props { }
// tslint:disable-next-line: no-empty-interface
interface State { }

export class App extends Component<Props, State> {
    state = {}
    constructor(props: any) {
        super(props);
        if (window.location.host.indexOf('localhost') === 0) {
            console.log('dev mode')
            const reloader = new Reloader('/bundle.js', 1000)
        }
    }

    render() {
        return (
            <div style={{ margin: '0px auto', width: '100%', maxWidth: 600, background: 'white', top: 0 }}>
                <BusinessCard />
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));