import React from 'react';
import { connect } from 'react-redux';
import Sticky from './Sticky'

const filtered = (stickies, filter) => {
  switch (filter) {
    case 'Urgent':
      return stickies.filter( s => !s.urgent )
    default:
      return stickies
  }
}

const StickyList = ({ stickies }) => {
  <ul>
    { stickies.map( (s) => {
      return ( <Sticky key={s.id} {...s} /> )
    })
    }
  </ul>
}

const mapStateToProps = (state) => {
  return { stickies: state.stickies, filter: state.filter }
}

export default connect(mapStateToProps)(StickyList)