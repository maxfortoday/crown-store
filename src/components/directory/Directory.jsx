import React from 'react'
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory-selectors';
import {createStructuredSelector} from 'reselect'

import './Directory.scss';
import MunuItem from '../menu-item/MenuItem';

const Directory = ({sections}) => {
  return (
   <div className="directory-menu">
    {
     sections.map(({id, ...otherSectionProps}) => (<MunuItem key={id} {...otherSectionProps}/>))
    }
   </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)