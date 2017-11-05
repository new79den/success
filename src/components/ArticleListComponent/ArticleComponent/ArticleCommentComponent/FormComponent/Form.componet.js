import React, {Component} from "react"
import propTypes from "prop-types"
import "./Form.componet.css"
import {connect} from "react-redux"

class FormComponet extends Component {
    static propTypes = {};

    state = {
        user : "",
        text: ""
    };


    setValueToState = (el) =>{
        let name = el.target.id;
        this.setState({[name]: el.target.value});
    };
    
    addComment=()=>{
        this.props.dispatch({
            type: "ADD_COMMENT",
            payload: {
                newComment: {
                    user: this.state.user,
                    text: this.state.text,
                },
                titleID: this.props.titleID
            },
            genterateId: true
        })
    };

    render() {

        return (

        <div className="formComponent">
                <label htmlFor="name">Title</label><br/>
                <input type="text" onChange={this.setValueToState} id="user" value={this.state.user} />
                <br/>
                <label htmlFor="comment">Text</label><br/>
                <textarea onChange={this.setValueToState} value={this.state.text} name="comment" id="text" cols="30" rows="5"></textarea>

                <button onClick={this.addComment} className="buttonComment">add comment</button>
            </div>
        )
    }
}

export default connect()(FormComponet);

