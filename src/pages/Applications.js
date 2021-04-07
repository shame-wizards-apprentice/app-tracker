import React from 'react';
import store from '../config/store';
import { connect } from 'react-redux';

const Applications = (props) => {
    return (
        <div>
            <h1>Here's your dumb application page, dummy.</h1>
            <h2>Welcome, {props.username}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state.user
    }
}

export default connect(mapStateToProps)(Applications)