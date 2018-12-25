import React, { Component } from 'react';
import {connect} from 'react-redux'
import {dd1Choice, dd2Choice} from '../actions/dropDownAction'
import axios from 'axios'
import Select from 'react-select'

class Dropdown extends Component {

    handleCoinChange = e => {
        this.props.dd1Choice(e.value, this.props.details)

    }

    handleCurrencyChange = e => {
        this.props.dd2Choice(e.target.value, this.props.details)
    }

    state = {
        coins: []
    }

    componentDidMount = () => {
        var arr = []
        axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
            .then(res => {
                const data = res.data.Data
                Object.keys(data).forEach( (key) =>{
                    arr.push({value: key, label:data[key]['FullName']})
                });
                this.setState({ coins: arr});
            })
    }

    render = () =>
        <div>
            <Select  
                onChange={this.handleCoinChange} 
                name="coin"
                options = {this.state.coins}
                style={{marginTop: '19px'}}
                placeholder="Select Coin"
            />   

            <select 
                className="form-control form-control-sm" 
                onChange={this.handleCurrencyChange} 
                name="currency" 
                value={this.props.details['currency']}
                style={{marginTop: '20px'}}
            >
                <option value="">Select Currency</option>
                <option value='INR'>INR</option>
                <option value='USD'>USD</option>
            </select>
        </div>
}

const mapStateToProps = state => ({
    details: state.details.details
})

export default connect(mapStateToProps, {dd1Choice, dd2Choice})(Dropdown)