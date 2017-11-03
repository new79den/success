import React, {Component} from "react"
import propTypes from "prop-types"
import "./Form.componet.css"

class FormComponet extends Component {
    static propTypes = {}

    state = {
        name : "",
        comment: ""
    }


    setValueToState = (el) =>{
        let name = el.target.id;
        this.setState({[name]: el.target.value});
    }

    render() {
        return (
            <div className="formComponent">
                <label htmlFor="name">Name</label><br/>
                <input type="text" onChange={this.setValueToState} id="name" value={this.state.name} />
                <br/>
                <label htmlFor="comment">comment</label><br/>
                <textarea onChange={this.setValueToState} value={this.state.comment} name="comment" id="comment" cols="30" rows="5"></textarea>

                <button className="buttonComment">add comment</button>
            </div>
        )
    }
}

export default FormComponet
