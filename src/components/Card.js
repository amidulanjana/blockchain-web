import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{ height: '130px', textAlign: 'center', borderRadius: "0px", backgroundColor: this.props.bgColor }}>
                    <div className="card-body" style={{ padding: '0.85rem' }}>
                        <i className={`fa fa-5x ${this.props.icon}`} style={{color:this.props.iconColor}}></i>

                    </div>
                    <div className="card-footer text-muted">
                        <h6 style={{ fontWeight: 700 }}>{this.props.title}</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;