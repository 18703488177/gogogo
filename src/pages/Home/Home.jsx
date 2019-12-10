import React, { Component } from 'react'
import Content from "./component/Content.js"
import Header from "./component/Header.js"
import Footer from "../../components/Footer/Footer.jsx"
import "../../assets/css/index/public.css"
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
        )
    }
}
