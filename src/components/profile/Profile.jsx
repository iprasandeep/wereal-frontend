import React from 'react'
import './profile.css';
import TopBar from '../topbar/TopBar';
import SideBar from '../sidebar/SideBar';
import Feed from '../feed/Feed';
import RightBar from '../rightbar/RightBar';

const Profile = () => {
  return (
    <>
    <TopBar />
    <div className="profile">
        <SideBar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img className='profileCoverImg' src="assets/post/post3.jpg" alt="" />
                <img className='profileUserImg' src="assets/person/p5.jpg" alt="" />
                </div>
            </div>
            <div className="profileInfo">
                <h4 className='profileInfoName'>Jasmine Kongra</h4>
                <span className="profileInfoDesc">Hello there! this is social media application right?</span>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <RightBar profile />
            </div>  
        </div>
    </div>
    </>
  )
}

export default Profile