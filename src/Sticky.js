import React from 'react';
import { connect } from 'react-redux';
import { toggleSticky } from './actions/stickies'

const Sticky = ({ id, note, urgent, dispatch }) => (
  <li
    onClick={() => dispatch(toggleSticky(id))}
    style={ urgent ? { textDecoration: 'under-line', color: 'red' } : {} }
  >
  {note}
  </li>
)

export default connect()(Sticky)