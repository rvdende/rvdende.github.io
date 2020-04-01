'use strict';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import { TabSVG } from './tab';

// tslint:disable-next-line: no-empty-interface
type Props = {}
// tslint:disable-next-line: no-empty-interface
type State = {}

export class BusinessCard extends Component<Props, State> {
    state = {
        height: window.innerHeight
    }

    constructor(props: Props) {
        super(props);
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
                margin: '0px auto',
                maxWidth: 500,
                background: 'white',
                top: 0,
                height: this.state.height
            }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <TabSVG fontawesomeIcon="fas fa-user-tie" />
                    </div>
                    <div style={{ paddingTop: 15, paddingLeft: 25 }}>
                        <h1 style={{ color: '#42BCE2' }}>Rouan van der Ende</h1>
                        <h2 style={{ color: '#656565', fontWeight: 'normal', fontSize: '110%' }}>Solution Developer</h2>
                    </div>
                </div>
            </div>
        )
    }
}
