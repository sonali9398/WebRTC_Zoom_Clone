import React, { useContext } from 'react';
import {Grid, Typography, Paper} from '@mui/material';

// import {SocketContext} from '../SocketContext';
import SocketContext from '../SocketContext';

const VideoPlayer = () => {
  const {name, accepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext);

  return (
    <div>
      <Grid container >
        {/* own video */}
        {
          stream && (
            <Paper>
              <Grid item xs={12} md={6}>
                <Typography variant='h5' gutterBottom>{name || 'Name'}</Typography>
                <video playsInline muted ref={myVideo} autoPlay />
              </Grid>
            </Paper>
          )
        }
        
        {/* other users video */}
        {
          accepted && !callEnded && (
            <Paper>
              <Grid item xs={12} md={6}>
                <Typography variant='h5' gutterBottom>{call.name || 'Name'}</Typography>
                <video playsInline muted ref={userVideo} autoPlay />
              </Grid>
            </Paper>
          )
        }
        
      </Grid>

    </div>
  )
}

export default VideoPlayer