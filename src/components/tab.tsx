import React, { Component } from 'react';

type P = {
    fontawesomeIcon: string
}

export class TabSVG extends Component<P, P> {
    state = { fontawesomeIcon: 'fas fa-user' }

    render() {
        return (
            <div style={{ position: 'relative' }}>
                {(this.state.fontawesomeIcon) && <i
                    style={{
                        position: 'absolute',
                        color: 'white',
                        left: 10,
                        top: 40
                    }}
                    className={this.state.fontawesomeIcon} />}
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="102.49" viewBox="0 0 35 102.49">
                    <path id="Path_1" data-name="Path 1" d="M41,280c0,15,35,15,35,30v40c0,15-35,14.464-35,30Z" transform="translate(-41 -278.797)" fill="#484848" />
                </svg>
            </div>
        )
    }
}

