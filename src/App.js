import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ModalWindow from './components/ModalWindow/ModalWindow';
import Postlist from './components/PostList/Postlist.module';
import Sidebar from './components/Sidebar/Sidebar';
import useFetching from './hooks/useFeching';


function App() {
  const [posts, setPosts] = useState([]);
  const [modalvis, setModalVis] = useState(false);
  const [isPostFecting, fetchFunc] = useFetching(fetchPosts);

  const [filtredPosts, setFiltredPosts] = useState([]);
  const [sorted, setSorted] = useState("straight");
  const [bukved, setBukved] = useState();

  useEffect(
    () => {
            fetchFunc(() => fetchPosts());
            setFiltredPosts(posts);
          }, 
    []
  );

  useEffect(
    () => filterPosts()
    ,
    [sorted, bukved]
  );


  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    
    function transform (post_elem) {
      return {heading: post_elem.title, 
              data: post_elem.body}
    }
    setPosts(response.data.map(transform));
    setFiltredPosts(response.data.map(transform));
  }


  function addPost(heading, body) {
    setPosts([{heading: heading, data: body}, ...posts]);
  }

  
  function filterPosts() {
    const filtred_posts = posts.filter( 
      post => post.heading.includes(bukved)
    );

    let processed_post = Object;
    switch (sorted) {
      case "straight":
        processed_post = filtred_posts.sort((a, b) => a.heading.localeCompare(b.heading))
        break;
      case 'reversed':
        processed_post = filtred_posts.sort((a, b) => b.heading.localeCompare(a.heading))
      }
      setFiltredPosts(processed_post);
  };



  return (
    <div className="App">
        <header className='headerc'>
          <h1>Наш пацанский блог</h1>
          <button onClick={() => setModalVis(true) } >Добавить</button>
        </header>
        <div className='content'>
          <Sidebar changeSorted={setSorted} setBukved={setBukved}></Sidebar>
          <Postlist posts={filtredPosts} isFetching={isPostFecting}/>
        </div>
        
        <ModalWindow visible={modalvis} setVisible={setModalVis} addPost={addPost} />
        
    </div>
  );
}

export default App;
