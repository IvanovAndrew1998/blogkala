import './App.css';
import { useState, useEffect } from 'react';
import Postlist from './components/PostList/Postlist.module';
import ModalWindow from './components/ModalWindow/ModalWindow';
import axios from 'axios';
import useFetching from './hooks/useFeching';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  const [posts, setPosts] = useState([]);
  const [modalvis, setModalVis] = useState(false);
  const [filtered, setFilter] = useState("unfiltred");
  const [isPostFecting, fetchPostO] = useFetching(fetchPosts);
  const [bukved, setBukved] = useState();

  useEffect(
    () => {
      fetchPostO();
    }, []
  );

  useEffect(
    // () => setPosts(sortPosts(filterPosts(posts, bukved), filtered)),
    // () => console.log(sortPosts(filterPosts(posts, bukved), filtered)),
    [filtered, bukved]
  );


  async function fetchPosts() {
    function transform (post_elem) {
      return {heading: post_elem.title, 
              data: post_elem.body}
    }
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data.map(transform));
  }

  function addPost(heading, body) {
    setPosts([{heading: heading, data: body}, ...posts]);
  }

  function sortPosts(posts, filterarg) {
    console.log(posts);
    switch (filterarg) {
      case "straight":
        return [...posts].sort((a, b) => a.heading.localeCompare(b.heading))
        break;
      case 'reversed':
        return [...posts].sort((a, b) => b.heading.localeCompare(a.heading))
      }
  }

  function filterPosts(posts, filterarg) {
    return [...posts].filter(post => post.heading.includes(filterarg), posts);
  }



  return (
    <div className="App">
        <header className='headerc'>
          <h1>Наш пацанский блог</h1>
          <button onClick={() => setModalVis(true) } >Добавить</button>
        </header>
        <div className='content'>
          <Sidebar changeFiltred={setFilter} setBukved={setBukved}></Sidebar>
          <Postlist posts={posts} isFetching={isPostFecting}/>
        </div>
        
        <ModalWindow visible={modalvis} setVisible={setModalVis} addPost={addPost} />
        
    </div>
  );
}

export default App;
