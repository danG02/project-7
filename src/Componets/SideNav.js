import React, { Component } from 'react';
import './SideNav.css';
import { useState, useEffect } from 'react';


/*
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

*/


function SideNav() {

    const [articles, setArticles] = useState([]);
    const [subreddit, setSubreddit] = useState('webdev');
    //const baseURL = "http://www.reddit.com/r/reactjs.json";
  
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

    const menus = [
        {to: '/r/popular', text: "Popular"},
        {to: '/r/all', text: "All"},
        {to: '/r/random', text: "Random"}
    ]

    const subreddits = [
        "askreddit",
        "worldnews",
        "videos",
        "funny",
        "todayilearned",
        "pics",
        "gaming",
        "movies",
        "news",
        "gifs",
        "aww",
        "mildlyintresting",
        "showerthoughts",
        "television",
        "jokes",
        "science",
        "soccer",
        "internetisbeautiful",
        "dataisbeautiful"

    ]
    return (
        <div className="sidenav container">
            <div className="sidenav-logo">
                <img src=""/>
            </div>
            <div className="sidenav-search bar">
                <input tpye="text" name="search" placeholder="Search Here" onChange={e => setSubreddit(e.target.value)} value={subreddit}/>
            </div>
            <div className="sidenav-link">
                <ul className="sidenav menu">
                    {menus.map(menu => (
                        <li><a href={menu.to}>{menu.text}</a></li>
                    ))}
                </ul>
                <br />
                <ul className="sidenav-subreddit">
                    {subreddits.map(subreddit => (
                        <li><a href={`/r/${subreddit}`}>{subreddit}</a></li>   
                    ))}
                </ul>
            </div>
        </div>
      );
}

export default SideNav;