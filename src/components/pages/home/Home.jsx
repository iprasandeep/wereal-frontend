import React from 'react'
import './home.css';
import TopBar from '../../topbar/TopBar';
import Feed from '../../feed/Feed';
import RightBar from '../../rightbar/RightBar';
import SideBar from '../../sidebar/SideBar';

const Home = () => {
  return (
    <>
    <TopBar />
    <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
    </div>
    </>
  )
}

export default Home;