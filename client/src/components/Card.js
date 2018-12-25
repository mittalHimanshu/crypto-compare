import React, { Component } from 'react';
import Dropdown from './Dropdown'
import { connect } from 'react-redux'
import { getDetails } from '../actions/dropDownAction'

class Card extends Component {

    onClick = e => {
        this.props.getDetails(this.props.details)
    }

    render = () => {
        const coin = this.props.details['coin']
        const currency = this.props.details['currency']
        const value = this.props.details['value']
        return(
            <div className="card" style={{paddingLeft: '15px', paddingRight: '15px', borderTopLeftRadius: '2px'}}>
                <div className="card-body">
                    <h4 className="card-title" style={{textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold', color: '#268ADF'}}>Crypto Exchange</h4>
                    <Dropdown />
                </div>
                <button className="btn btn-primary" onClick={this.onClick} style={{marginBottom: '17px'}}>Check</button>
                { value ? (
                        <input className="form-control" type="text" placeholder={`1 ${coin} = ${value} ${currency}`} readOnly style={{marginBottom: '16px'}} />
                    ) : (
                    <input className="form-control" type="text" placeholder="" readOnly style={{marginBottom: '16px'}} />
                    )}
                </div>
        )
    }
}


const mapStateToProps = state => ({
	details: state.details.details
})

export default connect(mapStateToProps, { getDetails }) (Card);