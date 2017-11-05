import React, {Component} from "react"
import propTypes from "prop-types"
import {connect} from "react-redux"

class Comment extends Component {
    static propTypes = {}

    render() {

         const {comment} = this.props;

        return (
            <div>
                <h3>{comment.user}</h3>
                <p>{comment.text}</p>
            </div>
        )
    }
}

export default connect((state, OwnProps)=>{

    return {comment : state.comment.find(el=>el.id === OwnProps.id)}


})(Comment)
