import React, {Component} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import ArticleComponent from "./ArticleComponent/Article.component"
import FormComponet from "./FormComponent/Form.componet"
import SelectComponent from "./SelectComponent/select.component"

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
        const article = this.props.articles.map((el) => {
            return <li key={el.id}>
                <ArticleComponent id={el.id} title={el.title} text={el.text} comments={el.comments}/>
            </li>
        });

        return (
            <div>
                <FormComponet/>
                <SelectComponent/>
                <ul>
                    {article}
                </ul>
            </div>
        )
    }
}


export default  connect(state => {

    const {articles, filter} = state;

    const filerArticles = articles.filter(e => {
        if (!filter.select.length) return true;

        return filter.select.indexOf(e.id) !== -1
    });

    return {articles: filerArticles}
})(ArticleListComponent)
