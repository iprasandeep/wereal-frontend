import React from 'react'
import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Chat</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Bookmark</span>
          </li>
          
          <li className="sidebarListItem">
            <PlayCircleFilledOutlinedIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupOutlinedIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Groups</span>
          </li>
          <li className="sidebarListItem">
            <EventOutlinedIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Events</span>
          </li>
          <li className="sidebarListItem">
            <LocalLibraryIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Courses</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutlineIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Jobs</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutlineOutlinedIcon className='sidebarIcon' />
            <span className='sidebarListItemText'>Help</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src='/assets/person/p3.jpg' alt='' />
            <span className='sidebarFriendName'>Jone Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src='/assets/person/p3.jpg' alt='' />
            <span className='sidebarFriendName'>Jone Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src='/assets/person/p3.jpg' alt='' />
            <span className='sidebarFriendName'>Jone Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src='/assets/person/p3.jpg' alt='' />
            <span className='sidebarFriendName'>Jone Doe</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src='/assets/person/p3.jpg' alt='' />
            <span className='sidebarFriendName'>Jone Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar