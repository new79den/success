import React, {Component} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import ArticleComponent from "./ArticleComponent/Article.component"
import FormComponet from "./FormComponent/Form.componet"
import SelectComponent from "./SelectComponent/select.component"
import TestIncrementComponent from "./TestIncrementComponent/TestIncrement.componet"

import {filterSelector} from "../../selector/filter.selector"


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
        console.log("update");

        const article = this.props.articles.map((el) => {
            return <li key={el.id}>
                <ArticleComponent id={el.id} title={el.title} text={el.text} comments={el.comments}/>
            </li>
        });

        return (
            <div>
                <TestIncrementComponent/>
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
    return {articles: filterSelector(state)}
})(ArticleListComponent)
