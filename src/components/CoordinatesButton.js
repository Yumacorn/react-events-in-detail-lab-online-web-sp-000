// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    // callback = (event) => {
        // let coords = []
        // console.log(`${props.clientX} ${props.clientY}`)
        // coords.push([props.clientX, props.clientY])
    callback = (event) => this.props.onReceiveCoordinates(event)
        // return (
        //     this.onReceiveCoordinates([[event.clientX], [event.clientY]])
        // )
    // }

    
    render () {
        return <button onClick={callback}></button>
    }
}