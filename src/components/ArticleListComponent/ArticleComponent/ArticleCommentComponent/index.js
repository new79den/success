import React, {Component} from "react"
import propTypes from "prop-types"

class ArticleCommetsComponent extends Component {
    static propTypes = {}

    render() {

        return (
            <div>
                {this.getBody()}
            </div>
        )
    }

    getBody(){
        const {comments} = this.props;

        if (!comments) return <p>don't have comments</p>;

        return (
            <ul>
                {this.getComments()}
            </ul>)
    }

    getComments() {

        const comment = this.props.comments.map(el=><li key={el.id}>
            <h3>{el.user}</h3>
            <p>{el.text}</p>
        </li>);

        return <ul>{comment}</ul>
    }

}

export default ArticleCommetsComponent
