import React, { useContext } from 'react';
import {Grid, Typography, Paper} from '@mui/material';

// import {SocketContext} from '../SocketContext';
import SocketContext from '../SocketContext';

const VideoPlayer = () => {
  const {name, Accepted, myVideo, userVideo,} = useContext(SocketContext);

  return (
    <div>
      <Grid container >
        {/* own video */}
        <Paper>
          <Grid item xs={12} md={6}>
            <Typography variant='h5' gutterBottom>Name</Typography>
            <video playsInline muted ref={null} autoPlay />
          </Grid>
        </Paper>

        {/* other users video */}
        <Paper>
          <Grid item xs={12} md={6}>
            <Typography variant='h5' gutterBottom>Name</Typography>
            <video playsInline muted ref={null} autoPlay />
          </Grid>
        </Paper>
      </Grid>

    </div>
  )
}

export default VideoPlayer