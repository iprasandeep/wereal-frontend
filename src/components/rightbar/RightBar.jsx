import React from 'react'
import './rightbar.css';
import {Users} from '../../dummyData';
import Online from '../online/Online';
const RightBar = ({profile}) => {

  const HomeRightBar = () => {
    return (
      <>
       <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/gift.png" alt="" />
            <span className='birthdayText'>
              <b>Neha</b> and <b>3 other friends</b> have a birthday today!
            </span>
        </div>
        <img className="rightbarAd"  src='assets/ad.png' alt="" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map(u=>(
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }
  const ProfileRightBar = () =>{
    return (
      <>
      <div className= 'profilerightbarWrapper'>
      <h4 className="rightbarProfileTitle"><strong>Profile Information</strong></h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className='rightbarProfileTitle'> <strong>Friends</strong></h4> 
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/p1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">
              Jasmine Sandlas
            </span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/p2.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">
              Julia Rimmon
            </span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/p3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">
              Nikolas Spark
            </span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/p4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">
              Justin
            </span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/p5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">
            Chief Hopper
            </span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/p6.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">
              Nick Fury
            </span>
          </div>
        </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        { profile? <ProfileRightBar /> : <HomeRightBar /> }
      </div>
    </div>
  )
}

export default RightBar