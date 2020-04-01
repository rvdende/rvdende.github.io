'use strict';
import React, { Component } from 'react';
import { theme } from '../theme';
// tslint:disable-next-line: no-empty-interface
type Props = {}
// tslint:disable-next-line: no-empty-interface
type State = {}
export class Portfolio extends Component<Props, State> {
    state = {
        items: [
            {
                title: 'PR0T0TYP3',
                description: 'Internet of Things Platform',
                image: 'prototype.jpg',
                url: 'https://prototype.iotnxt.io/'
            },
            {
                title: 'MO Property',
                description: 'Real Estate Agency',
                image: 'moprop.jpg',
                url: 'https://www.moproperty.co.za/'
            },
            ,
            {
                title: 'Riana van Niekerk',
                description: 'Artist Portfolio',
                image: 'rmvanniekerk.jpg',
                url: 'https://www.rianavanniekerk.com/'
            }]
    }

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div style={{ background: theme.color.backgroundA, padding: 35 }} >

                <div style={{ color: 'white' }}>
                    <h1 style={{ color: 'white' }}><i className="fas fa-briefcase" /> PORTFOLIO</h1>
                </div>

                {(this.state.items.map((item, key) => {
                    return <div className='portfolioItem'>
                        <a href={item.url}>
                            <img style={{ boxSizing: 'border-box' }} src={'/img/' + item.image} />
                            <div style={{ padding: '10px 15px 15px 15px' }}>
                                <h1>{item.title}</h1>
                                <h2>{item.description}</h2>
                            </div>
                        </a>
                    </div>
                }))}
            </div>
        )
    }
}