import React from 'react';

// VideoCard Component
export const VideoCard = ({ info, hideDetails = false }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-72'>
      <img className='rounded-lg' alt="thumbnailImg" src={thumbnails.high.url} />
      <ul>
        {hideDetails && <li className='font-bold'>Sponsored: {channelTitle}</li>}
        {hideDetails && <li className='flex gap-2 m-2'>
         <button className='w-[180px] bg-blue-100 px-4 py-2 rounded-3xl font-medium ' >Watch</button>  
         <button className='w-[200px] px-4 py-2 rounded-3xl border border-blue-100 font-medium'>Shop Now</button>  
        </li>}
        {!hideDetails && <li className='font-bold'>{title}</li>} {/* Conditionally render title */}
        {!hideDetails && <li>{channelTitle}</li>}
        {!hideDetails && <li>{statistics?.viewCount} views</li>} {/* Conditionally render views */}
      </ul>
    </div>
  );
};

// AdVideoCard Component
export const AdVideoCard = ({ info }) => {
  return (
    <>
      <VideoCard key={info.id} info={info} hideDetails={true} /> {/* Pass hideDetails prop as true */}
    </>
  );
};

