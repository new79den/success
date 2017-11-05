import React, {Component} from "react"
import propTypes from "prop-types"
import ArticleCommetsComponent from "./ArticleCommentComponent/ArticleComment.component"
import "./Article.component.css"
import toggleOpen from "../../../decorators/toggleOpen"
import {connect} from "react-redux"

class ArticleComponent extends Component {
    static propTypes = {};


    deleteArticle(id) {
       this.props.dispatch({
           type: "DELETE_ARTICLE",
           payload: {id: id}
       });
    }

    render() {

        const {text, title, comments, isOpen, showBlock, id} = this.props;


        return (
            <div className="ArticleComponent">
                <div className="BlockTitle">
                    <button onClick={showBlock} className="buttonArticle">{ isOpen ? "X" : "O" }</button>
                    <h2 className="title">{title}</h2>
                </div>

                { isOpen ? <div>
                    <p className="text">{text}</p>
                    <ArticleCommetsComponent comments={comments} titleID = {id}/>
                    <button onClick={this.deleteArticle.bind(this, id)} className="DeleteArticle">delete article</button>
                </div>

                    : null }


            </div>
        )
    }
}

export default connect()(toggleOpen(ArticleComponent))
