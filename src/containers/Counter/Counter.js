import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/actions'

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdditionCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractionCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storeResults.map(strResult => (
                            <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.val}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storeResults: state.res.results
    };
};

const mapDispatchToProps = dispatch =>{
    return {
            // onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
            // onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
            // onAdditionCounter:  () => dispatch({type: actionTypes.ADD, value: 5}),
            // onSubstractionCounter: () => dispatch({type: actionTypes.SUBTRACT, value: 5}),
            // onStoreResult: (result) => dispatch({type:actionTypes.STORE_RESULT, result:result}),
            // onDeleteResult: (id) => dispatch({type:actionTypes.DELETE_RESULT, resultElId:id})

            onIncrementCounter: () => dispatch(actionCreators.increment()),
            onDecrementCounter: () => dispatch(actionCreators.decrement()),
            onAdditionCounter:  () => dispatch(actionCreators.add(5)),
            onSubstractionCounter: () => dispatch(actionCreators.subtract(5)),
            onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
            onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
        };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);