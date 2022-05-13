import React from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar({changeSorted, setBukved}) {
  return (
    <div className={styles.sidebar}>
      <select name='rot_ebal' onChange={(e) => {changeSorted(e.target.value)}}>
          <option value="straight">По возрастанию</option>
          <option value="reversed">По убыванию</option>
      </select>
    <input placeholder="Введите текстильщика" onChange={e => setBukved(e.target.value)}/>
    </div>
  )
}
