import React from "react"

export default class ClassFirst extends React.Component{
    render(){
        const {name, age} = this.props

        return <p>{name}-{age}</p>
    }
}