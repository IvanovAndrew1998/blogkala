import React from 'react';
import Testanala from '../Testanala/Testanala';

export default function Postlist({posts}) {
    
    return (
        <div className='blogc'>
          {posts.map(post => 
            <Testanala key={Date.now()} header={post.heading} content={post.data}/>)}
        </div>
    )
}