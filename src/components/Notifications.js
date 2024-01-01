import React, { useContext } from 'react';
import { Button } from '@mui/material';
import {SocketContext} from '../SocketContext';

const Notifications = () => {
  const {anserCall, call, accepted} = useContext(SocketContext);

  return (
    <div>
      {
        call.isReceivedCall && !accepted && (
          <div style={{display:'flex', justifyContent:'center'}}>
            <h1>{call.name} is Calling</h1>
            <Button variant='contained' color='pimary' onClick={anserCall}> Answer </Button>
          </div>
        )
      }
    </div>
  )
}

export default Notifications