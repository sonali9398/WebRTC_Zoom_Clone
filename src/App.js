import './App.css';
import { Typography, AppBar } from '@mui/material';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

function App() {
  return (
    <div className="App">
      {/* <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>Video Chat</Typography>
      </AppBar> */}
      <h2>Video Chat</h2>
      {/* videoplay */}
      <VideoPlayer/>
      {/* options = notifications */}
      <Options/>
        <Notifications/>
      <Options/>
    </div>
  );
}

export default App;
