'use strict';
import './theme.scss';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import { Reloader } from './utils/reload';
import { BusinessCard } from './components/businesscard';
import { Portfolio } from './components/portfolio';
// tslint:disable-next-line: no-empty-interface
type Props = {}
// tslint:disable-next-line: no-empty-interface
type State = {}

export class App extends Component<Props, State> {
    state = { height: window.innerHeight }
    constructor(props: any) {
        super(props);
        if (window.location.host.indexOf('localhost') === 0) {
            console.log('dev mode')
            const reloader = new Reloader('/bundle.js', 1000)
        }

        window.addEventListener('resize', this.onResize)
    }

    onResize = () => {
        console.log('resize')
        if (window.innerHeight !== this.state.height) {
            this.setState({ height: window.innerHeight });
        }
    }

    render() {
        return (
            <div style={{
                margin: '0px auto', width: '100%', maxWidth: 600,
                background: 'white', top: 0,
                height: this.state.height
            }}>
                <BusinessCard />
                <Portfolio />
            </div>
        )
    }
}

render(<App />, document.getElementById('app'));