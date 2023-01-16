import React from 'react'
import './share.css';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PermMediaIcon from '@mui/icons-material/PermMedia';

const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src='/assets/person/p1.jpg'  alt='dp' />
                <input placeholder=" What's in your mind?" 
                type="text" className="shareInput"
                />
            </div>
        <hr className='shareHr' />
        <div className="shareBottom">
            <div className='shareOptions'>
                <div className="shareOption">
                    <PermMediaIcon htmlColor='green' className='shareIcon' />
                    <span className='shareOptionText'> Photo or Video</span>
                </div>
                <div className="shareOption">
                    <LabelIcon htmlColor='tomato' className='shareIcon' />
                    <span className='shareOptionText'> Tag</span>
                </div>
                <div className="shareOption">
                    <RoomIcon htmlColor='green' className='shareIcon' />
                    <span className='shareOptionText'> Room</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotionsIcon htmlColor="yellow" className='shareIcon' />
                    <span className='shareOptionText'> Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button> 
            </div>
        </div>
    </div>
  )
}

export default Share;