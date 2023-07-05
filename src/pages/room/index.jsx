/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
    const { roomId } = useParams()

    const myMeeting = async (element) => {
        const appID = 1616903187;
        const serverSecret = "577deb29799544c067d8ab2b06b132cf";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret, 
            roomId, 
            Date.now().toString(), 
            'vaibhav'

            );
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: element,
                scenario: {
                    mode: ZegoUIKitPrebuilt.VideoConference,
                }
            });

    }
  return (
    <div className='room-page'>
       <div ref={myMeeting}/>
    </div>
  )
}

export default RoomPage