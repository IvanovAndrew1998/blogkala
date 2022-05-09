import React from 'react';
import Testanala from '../Testanala/Testanala';
import Loader from '../Loader/Loader';

export default function Postlist({posts, isFetching}) {
    
    return (
        <div className='blogc'>
            {/* {
            if (isFetching) {<Loader/>}
            else {
            {posts.map(post => 
                <Testanala key={post.data.hashCode} header={post.heading} content={post.data}/>)}
            } } */}
            {
                isFetching
                ? <Loader/>
                : posts.map(post => 
                    <Testanala key={post.data.hashCode} header={post.heading} content={post.data}/>)
            }
        </div>
    )
}