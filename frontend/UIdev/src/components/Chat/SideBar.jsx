import React from 'react'
import ChatTopic from './ChatTopic'
import RelatedChat from './RelatedChat'
function SideBar() {
  return (
    <div>
        <section>
            <div className=' h-screen right-5'>
            <aside className=" pb-20 h-full">
                <ChatTopic/>
                <RelatedChat/>
                <RelatedChat/>
                
            </aside>

            </div>
            
        </section>

    </div>
  )
}

export default SideBar