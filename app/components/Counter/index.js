import React, { Component } from 'react';
import { Text } from 'react-native';

import style from './style'

export default class Counter extends Component {

     constructor(){
       super()
       this.state = {
         count: 0
        }
     }

    componentDidMount() {

      setInterval(() => {

        this.setState({count: this.state.count + 1})

      }, 1000)

    }

    render() {
      const { count } = this.state
      return (
        <Text style={[{ color: this.props.color, 
                       fontSize: this.props.size}, style.counter]}>
          {count}
        </Text>
      )
    }

}
