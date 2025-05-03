import React from 'react';
import ChatCardLeft from './ChatCardLeft';
import ChatCardRight from './ChatCardRight';
import MessageForm from './MessageForm';
import SideBar from './SideBar';

function ChatCard() {
  return (
    <div className='flex flex-col sm:flex-row w-full bg-[#FBF8F2] h-screen'>
   
      <div className='flex-1 order-1 sm:order-none overflow-y-auto scrollbar-hide'
       style={{
    '::-webkit-scrollbar': { display: 'none' },
    'scrollbar-width': 'none',
  }}>
        <div className='space-y-4 p-4 sm:pr-0'>
          <ChatCardRight />
          <ChatCardRight />
          <ChatCardRight />
          <ChatCardLeft />
          <MessageForm />
        </div>
      </div>
      <div className='order-2 sm:order-none sm:sticky hidden sm:block sm:top-0 w-full sm:w-[25%] sm:h-screen bg-[#FBF8F2] border-t sm:border-t-0 sm:border-l border-gray-200'>
        <SideBar />
      </div>
    </div>
  );
}

export default ChatCard;