import React, {Component as ReactComponen} from "react"

export default (OringComponet) => class WrapConnect extends ReactComponen{

    state = {
        isOpen : true
    };

    showBlock = () =>{

        this.setState({
          isOpen: !this.state.isOpen
      })
    };

    render (){

        return <OringComponet {...this.props} {...this.state} showBlock = {this.showBlock} />
    }
}