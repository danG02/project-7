import './App.css';
import SideNav from './Componets/SideNav';
import Posts from './Componets/Posts';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { subreddit } from './Componets/SideNav';
import { articles } from './Componets/SideNav';


function App() {

  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('webdev');

  useEffect(() => {
    fetch("https://www.reddit.com/r/"+ subreddit +".json").then(res => {
        if (res.status !== 200) {
            console.log("ERROROROROR");
            return;
        }

        res.json().then(data => {
            if(data != null) {
                console.log(data);
                setArticles(data.data.children);
            }
        });
    })
}, [subreddit])

  return (
    <div className="App">
      <SideNav>
      </SideNav>
      <div className="posts">
        {(articles != null) ? articles.map((posts, index) => <Posts key={index} posts={posts.data}/>):''}
      </div>
    </div>
  );
}


export default App;
