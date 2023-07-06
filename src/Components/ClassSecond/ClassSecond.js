import React from "react"

export default class ClassSecond extends React.Component{
    render(){
        const {name, age} = this.props

        return <p>{name}-{age}</p>
    }
}