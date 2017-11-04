import React, {Component} from "react"
import propTypes from "prop-types"
import "./TestIncrement.componet.css"
import {connect} from "react-redux"

class TestIncrementComponent extends Component {
    static propTypes = {}

    count = () => {
        this.props.dispatch({
            type: "INCREMENT"
        })
    };
    
    render() {
        return (
            <div className="counter">
                <p>count {this.props.count}</p>
                <button onClick={this.count}>Count</button>
            </div>
        )
    }
}

export default connect(state=>{
   return {
       count: state.counter
   }

})(TestIncrementComponent)
