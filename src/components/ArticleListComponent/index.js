import React, {Component} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import ArticleComponent from "./ArticleComponent"

class ArticleListComponent extends Component {

    static propTypes = {
        articles: PropTypes.arrayOf(
            PropTypes.shape({

                id: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,

                comments: PropTypes.arrayOf
            })
        )
    };


    render() {
        const article = this.props.articles.map((el)=>{
            return <li key={el.id}>
                <ArticleComponent id={el.id} title = {el.title} text = {el.text} comments = {el.comments}/>
            </li>
        });

        return (
            <ul>
                {article}
            </ul>
        )
    }
}


export default  connect(state=>{
    return {articles: state.articles}
})(ArticleListComponent)
