import './App.css';
import { useState } from 'react';
import Postlist from './components/PostList/Postlist.module';


function App() {
  const initial_posts = [
    {heading: "post1", data: "postdata1postdata1postdata1postdata1postdata1"},
    {heading: "post2", data: "postdata2postdata2postdata2postdata2postdata2"},
    {heading: "post3", data: "postdata3postdata3postdata3postdata3postdata3"},
    {heading: "post4", data: "postdata4postdata4postdata4postdata4postdata4"},
    {heading: "post5", data: "postdata5postdata5postdata5postdata5postdata5"},
  ];
  const [posts, setPosts] = useState(initial_posts);

  function addPost() {
    setPosts([...posts, {heading: "post5", data: "postdata5postdata5postdata5postdata5postdata5"}]);
    console.log(posts);
  }
  return (
    <div className="App">
        <header className='headerc'>
          <h1>Наш пацанский блог</h1>
          <button onClick={addPost}>Добавить</button>
        </header>
        <Postlist posts={posts}/>
    </div>
  );
}

export default App;
