import React, { Component } from 'react';

type P = {
    icons: string[],
    style: object
}

export class TabSVG extends Component<P, P> {
    state = {
        icons: ['fas fa-user'],
        style: {
            background: '#cccccc'
        }
    }

    static getDerivedStateFromProps(props: P, state: P) {
        return props;
    }

    render() {

        const height = 50 + (this.state.icons.length * 50)

        return (
            <div style={{ position: 'relative' }}>
                {/* {(this.state.fontawesomeIcon) && <i
                    style={{
                        position: 'absolute',
                        color: 'white',
                        left: 10,
                        top: 40
                    }}
                    className={this.state.fontawesomeIcon} />} */}
                {this.state.icons.map((icon, i) => {
                    return <div key={i} style={{
                        position: 'absolute', width: 30, height: 25, left: 2,
                        top: 40 + (50 * i),
                        textAlign: 'center'
                    }}>
                        <i style={{ color: 'white' }} className={icon} />
                    </div>
                })}
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height={height}
                    viewBox={"0 0 35 " + height}>

                    <path id="Path_1"
                        data-name="Path 1"
                        d={"M 41, 280  c0, 15, 35, 15, 35, 30 v " + (height - 60) + " c 0, 15 -35 , 15 -35, 30 Z"}
                        transform="translate(-41 -278.797)"
                        fill={this.state.style.background} />

                    {(this.state.icons.length > 1) &&
                        (this.state.icons.map((icon, i) => {
                            if (i !== 0)
                                return <line key={i} id="Line_2" data-name="Line 2" x1="19"
                                    transform={"translate(10 " + (20 + (50 * i)) + ")"}
                                    fill="none" stroke="#fff" strokeWidth="1" />
                        }
                        ))
                    }


                </svg>
            </div>
        )
    }
}

