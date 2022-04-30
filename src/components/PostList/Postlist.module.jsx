import React from 'react';
import Testanala from '../Testanala/Testanala';

export default function Postlist({posts}) {
    
    return (
        <content className='blogc'>
          {posts.map(post => 
            <Testanala header={post.heading} content={post.data}/>)}
        </content>
    )
}