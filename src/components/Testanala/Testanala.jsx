import React from 'react'
import classes from './Testanala.module.css';

export default function Testanala({header = "Заголовок поста", content = "Тело поста"}) {

  return (
    <div className={classes.post}>
        <h3>{header}</h3>
        <p>{content}</p>
    </div>  
  )
}
