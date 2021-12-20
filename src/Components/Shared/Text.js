import React, { Fragment } from 'react'
import classes from '../../Assets/CSS/Text.module.css'

export default function Text(props) {

    return (
        <Fragment>
          <div className={classes.title}>{props.title}</div>  
          <div  className={classes.description}>{props.description}</div>
          <a className={classes.red} href='/#'>{props.anchor}</a>
        </Fragment>
    )
}
