import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './topbar.css';

const TopBar = () => {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className='logo'>WeReal</span>
        </div>
        <div className="topbarCenter">
            <div className='searchbar'>
                <SearchIcon  className='searchIcon'/>
                <input type="text" placeholder='Search for friend or post' className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <PersonIcon />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <ChatIcon />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <NotificationsIcon />
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src="/assets/person/p1.jpg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}

export default TopBar