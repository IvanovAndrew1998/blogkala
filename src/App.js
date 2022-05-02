import './App.css';
import { useState, useEffect } from 'react';
import Postlist from './components/PostList/Postlist.module';
import ModalWindow from './components/ModalWindow/ModalWindow';
import axios from 'axios';


function App() {
  // const initial_posts = [
  //   {heading: "post1", data: "postdata1postdata1postdata1postdata1postdata1"},
  //   {heading: "post2", data: "postdata2postdata2postdata2postdata2postdata2"},
  //   {heading: "post3", data: "postdata3postdata3postdata3postdata3postdata3"},
  //   {heading: "post4", data: "postdata4postdata4postdata4postdata4postdata4"},
  //   {heading: "post5", data: "postdata5postdata5postdata5postdata5postdata5"},
  // ];
  const [posts, setPosts] = useState([]);
  const [modalvis, setModalVis] = useState(false);

  <button onClick={() => setModalVis(true)} >Добавить</button>
  async function fetchPosts() {
    function transform (post_elem) {
      return {heading: post_elem.title, 
              data: post_elem.body}
    }
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data.map(transform));
  }

  function addPost(heading, body) {
    setPosts([...posts, {heading: heading, data: body}]);
  }

  useEffect(
    () => {
      fetchPosts()
    }, []
  );

  return (
    <div className="App">
        <header className='headerc'>
          <h1>Наш пацанский блог</h1>
          <button onClick={() => setModalVis(true) } >Добавить</button>
        </header>
        <Postlist posts={posts}/>
        <ModalWindow visible={modalvis} setVisible={setModalVis} addPost={addPost}/>
        
    </div>
  );
}

export default App;
