import React from "react"
import './App.component.css';
import ArticleListComponent from "./ArticleListComponent/ArticleList.component"
import store from "../store"
import {Provider} from "react-redux"

function AppComponent() {
    return (

        <Provider store={store}>
            <ArticleListComponent/>
        </Provider>
    )
}


export default AppComponent;