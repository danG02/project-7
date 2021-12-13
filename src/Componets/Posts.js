import './Posts.css';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';


/*
    const baseURL = "http://www.reddit.com/r/reactjs.json";
    const [articles, setArticles] = useState([]);
    const [subreddit, setSubreddit] = useState('webdev');

    useEffect(() => {
        fetch(baseURL).then(res => {
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

all that above could go in after function Posts

*/

function Posts(props) {

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
        //articles is the className for css ONLY
        <posts className="articles1">
            <div className="box2">
                <a href={ "https://reddit.com" + props.posts.permalink } target="_blank">
                    <h3>{ props.posts.title }</h3>
                </a>
            </div>
        </posts>
    );
}

export default Posts;
