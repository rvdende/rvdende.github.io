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
    state = {}

    constructor(props: Props) {
        super(props);
    }

    onResize = () => {
        console.log('resize')
    }

    render() {

        const entryStyle = { padding: 16, color: theme.color.spotB }

        return (
            <div style={{
                margin: '0px auto',
                width: '100%',
                top: 0,
                zIndex: 0,
                marginBottom: 100
            }}>
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', zIndex: 10 }}>
                    <div>
                        <TabSVG
                            style={{ background: theme.color.backgroundA }}
                            icons={["fas fa-user-tie"]} />
                    </div>
                    <div style={{ paddingTop: 30, paddingLeft: 25 }}>
                        <h1>Rouan van der Ende</h1>
                        <h2>Developer</h2>
                    </div>
                </div>

                <div style={{ position: 'relative', zIndex: 5, height: 150 }}>
                    <div style={{ position: 'absolute', top: -30, display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <div>
                            <TabSVG
                                style={{ background: theme.color.spotA }}
                                icons={["fas fa-phone-alt", "fas fa-location-arrow", "fas fa-map-marker-alt", "fab fa-github"]} />
                        </div>

                        <div style={{ paddingTop: 20, paddingLeft: 25, flex: 1 }}>
                            <div style={{ ...entryStyle, ...{ borderBottom: '1px solid ' + theme.color.lightgray } }}>+27 62 933 1183</div>
                            <div style={{ ...entryStyle, ...{ borderBottom: '1px solid ' + theme.color.lightgray } }}><a href="https://rvdende.github.io/">rvdende.github.io</a></div>
                            <div style={{ ...entryStyle, ...{ borderBottom: '1px solid ' + theme.color.lightgray } }}>Mosselbay, South Africa</div>
                            <div style={entryStyle}><a href="https://github.com/rvdende">github.com/rvdende</a></div>
                        </div>
                    </div>
                </div>

                <div style={{ clear: 'both' }} />
            </div>
        )
    }
}