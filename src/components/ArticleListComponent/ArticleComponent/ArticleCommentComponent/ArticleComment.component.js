import React, {Component} from "react"
import propTypes from "prop-types"
import toggleOpen from "../../../../decorators/toggleOpen"
import Commonet from "./Comment/Comment.component"
import FormComponet from "./FormComponent/Form.componet"

class ArticleCommetsComponent extends Component {
    static propTypes = {}

    render() {

        return (
            <div>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {comments, isOpen, showBlock} = this.props;


        if (!comments) return <p>don't have comments</p>;

        return (
            <ul>
                <button onClick={showBlock}>{isOpen ? "Show comments" : "Hide comments"}</button>
                {this.getComments()}
            </ul>)
    }

    getComments() {
        if (!this.props.isOpen) {

            const comment = this.props.comments.map(id => <li key={id}>
                <Commonet id={id}/>
            </li>);

            return (<div>
                <ul>{comment}</ul>
                <FormComponet titleID = {this.props.titleID}/>
            </div>)
        }

        return null
    }

}

export default toggleOpen(ArticleCommetsComponent)
