import React, {Component} from "react"
import propTypes from "prop-types"
import Select from "react-select"
import 'react-select/dist/react-select.css';
import {connect} from "react-redux";
import "./select.component.css"
import {mapToArr} from "../../../helper"


class SelectComponet extends Component {
    static propTypes = {};

    state = {
        select: null
    };

    getOption() {
        return this.props.articles.map(el => {
            return {label: el.title, value: el.id}
        })
    }

    logChange = (el)=>{
        const select = el.map(el=>{
           return el.value 
        });

        this.props.dispatch({
            type: "FILER_ARTICLE",
            payload: {
                select: select
            }
        });

        this.setState({
            select: el
        })
    };

    render() {


        return (
            <Select className="Select"
                name="form-field-name"
                value={this.state.select}
                multi={true}
                options={this.getOption()}
                onChange={this.logChange}
            />
        )
    }
}

export default connect(state => {

    return {articles: mapToArr(state.articles)}

})(SelectComponet)
