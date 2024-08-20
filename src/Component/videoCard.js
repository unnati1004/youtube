import React from 'react'

export const VideoCard = ({info}) => {
    console.log(info);
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;

  return (
    <div className='p-2 m-2 w-72'>
        <img className='rounded-lg' alt="thumbnailImg" src={thumbnails.high.url}/>
        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}
