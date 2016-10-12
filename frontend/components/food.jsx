import React from 'react';
import {Component} from 'react'
import store from '../store'

const Food = React.createClass({
  render: function() {
    return (
      <div>
        {store.getState().foods.map(function(food) {
          return <span>{food}</span>
        })}
      </div>
    )
  }
})

export default Food;
