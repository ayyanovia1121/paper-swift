'use client'
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react'

const CollaborativeRoom = () => {
  return (
    <RoomProvider id='my-room'>
        <ClientSideSuspense fallback={<div>Loading...</div>}>
        <div className="collaborative-room">

        </div>
        </ClientSideSuspense>
    </RoomProvider>
  )
}

export default CollaborativeRoom