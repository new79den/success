import React, {Component} from "react"
import propTypes from "prop-types"
import ArticleCommetsComponent from "./ArticleCommentComponent"

class ArticleComponent extends Component {
    static propTypes = {};


    render() {

        const { text, title, comments} = this.props;
        

        return (
            <div>
                <h2 className="title">{title}</h2>
                <p className="text">{text}</p>
                <ArticleCommetsComponent comments = {comments}/>
            </div>
        )
    }
}

export default ArticleComponent
