import React, {Component} from "react"
import propTypes from "prop-types"
import {connect} from "react-redux"
import {commentSelectorFactory} from "../../../../../selector/comment.selector"

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

const mapStateToProps = () => {
    const commentSelector = commentSelectorFactory();

    return (state, OwnProps) => {
        return {comment: commentSelector(state, OwnProps)}

    }
}
export default connect(mapStateToProps)(Comment)
