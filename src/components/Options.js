import React, { useContext, useState } from 'react'
import {Button, TextField, Grid, Typography, Container, Paper} from '@mui/material';
import {makeStyles} from '@mui/material' 
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {Assignment, Phone, PhoneDisabled} from '@mui/material'
import SocketContext from '../SocketContext';

const Options = ({children}) => {
  const {me, accepted, name, setName, leaveCall, callEnded, callUser} = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  
  return (
    <Container>
      <Paper>
        <form noValidate autoComplete='off'>
          <Grid>
            <Grid item xs={12} md={6}>
              <Typography gutterBottom>Account Info</Typography>
              <TextField label='Name' value='name' onChange={(e) => setName(e.target.value)}/>
              <CopyToClipboard text={me}>
                  <Button variant='container' fullWidth>
                      Copy your id
                  </Button>
              </CopyToClipboard>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography gutterBottom>Make a call</Typography>
              <TextField label='Id to call' value='idToCakk' onChange={(e) => setIdToCall(e.target.value)}/>
              {
                accepted && !callEnded ? (
                  <Button variant='contained' fullWidth onClick={leaveCall}>Hang Up</Button>
                ) : (
                  <Button variant='contained' fullWidth onClick={() => callUser(idToCall)}>Call</Button>
                )
              }
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  )
}

export default Options