import React from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar({changeFiltred, setBukved}) {
  return (
    <div className={styles.sidebar}>
      <select name='rot_ebal' onChange={(e) => {changeFiltred(e.target.value)}}>
          <option value="straight">По возрастанию</option>
          <option value="reversed">По убыванию</option>
      </select>
    <input placeholder="Введите текстильщика" onChange={e => setBukved(e.target.value)}/>
    </div>
  )
}
