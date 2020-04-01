'use strict';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import { TabSVG } from './tab';
import { theme } from '../theme'
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

        const entryStyle = { padding: 16, color: theme.color.spotB }

        return (
            <div style={{
                margin: '0px auto',
                width: '100%',
                background: 'white',
                top: 0,
                height: this.state.height,
                zIndex: 0
            }}>
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', zIndex: 10 }}>
                    <div>
                        <TabSVG
                            style={{ background: theme.color.backgroundA }}
                            icons={["fas fa-user-tie"]} />
                    </div>
                    <div style={{ paddingTop: 30, paddingLeft: 25 }}>
                        <h1 style={{ color: theme.color.spotA, fontSize: '120%' }}>Rouan van der Ende</h1>
                        <h2 style={{ color: theme.color.spotB, fontWeight: 'normal', fontSize: '100%' }}>Solution Developer</h2>
                    </div>
                </div>

                <div style={{ position: 'relative', zIndex: 5, height: 150 }}>
                    <div style={{ position: 'absolute', top: -30, display: 'flex', flexDirection: 'row' }}>
                        <div>
                            <TabSVG
                                style={{ background: theme.color.spotA }}
                                icons={["fas fa-phone-alt", "fas fa-location-arrow", "fas fa-map-marker-alt"]} />
                        </div>

                        <div style={{ paddingTop: 20, paddingLeft: 25 }}>
                            <div style={{ ...entryStyle, ...{ borderBottom: '1px solid gray' } }}>+27 62 933 1183</div>
                            <div style={{ ...entryStyle, ...{ borderBottom: '1px solid gray' } }}>rvdende.github.io</div>
                            <div style={entryStyle}>Mosselbay, South Africa</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}