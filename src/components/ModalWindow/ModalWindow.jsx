import React from 'react';
import styles from './ModalWindow.module.css';
import { useState } from 'react';

export default function ModalWindow({visible, setVisible, addPost}) {

  const root_classes = [styles.naturalhabitat];
  if (visible) {
      root_classes.push(styles.active);
  }
  const [heading, setHeading] = useState("");
  const [body, setBody] = useState ("");
  
  function publish() {
    addPost(heading, body);
    setVisible(false);
  }

  return (
    <div className={root_classes.join(' ')} onClick={() => setVisible(false)}>
        <div className={styles.modalwindow} onClick={(e) => e.stopPropagation()}>
            <h2>Создание нового говна:</h2>
            <div className='formgovna'>
                <input placeholder='Название говна' onChange={(e) => setHeading(e.target.value)} value={heading}></input>
                <input placeholder='Содержание говна' onChange={(e) => setBody(e.target.value)}></input>
                <button onClick={publish}>Опубликовать</button>
            </div>
        </div>
    </div>
  )
}
