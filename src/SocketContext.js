import React, {createContext, useState, useRef, useEfferct} from 'react';
import {io} from 'socket.io-client';
import Peer from 'simple-peer';
// import id from '../src/index'

const SocketContext = createContext();

const socket = io('http://localhost:5000');

const ContextProvider = ({children}) =>{
    const [stream, setStream] = useState(null);
    const [me, setMe] = useState();
    const[call, setCall] = useState();
    const [accepted, setAccepted] = useState(false);
    const[callEnded, setCallEnded] = useState(false);
    const[name, setName] = useState();


    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    useEfferct(() =>{
            navigator.mediaDevices.getUserMedia({video: true, audio: true})
                .then((currentStream) => {
                    setStream(currentStream);

                    myVideo.current.srcObject = currentStream;
                })
            socket.on('me', (id) => setMe(id));
            socket.on('calluser', ({from, name: callerName, signal}) =>{
                setCall({ isReceicedCall: true, from, name:callerName, signal})
            })
    }, []);

    const answerCall = () =>{
        setAccepted(true);

        const peer = new Peer( { initiator: false, trickle: false, stream});

        peer.on('signal' , (data) => {
            socket.emit('calluser', {userToCall: id,signalData: data,from:me, name})
        });

        peer.on('stream', (currentStream) =>{
            userVideo.current.srcObject = currentStream;
        });

        peer.signal(call.signal);

        connectionRef.current = peer;

    }

    const callUser = () =>{
        const peer = new Peer( { initiator: true, trickle: false, stream});
        
        peer.on('signal' , (data) => {
            socket.emit('answercall', {signal: data, to:call.from})
        });

        peer.on('stream', (currentStream) =>{
            userVideo.current.srcObject = currentStream;
        });

        peer.on('callaccepted', (signal) =>{
            setAccepted(true);

            peer.signal(signal);
        });
        connectionRef.current = peer;
    }

    const leaveCall = () =>{
        setCallEnded(true);
        connectionRef.current.destroy();
        window.location.reload();
    
    }


return(
        <SocketContext.Provider value={{
            call,
            accepted,
            myVideo,
            userVideo,
            stream,
            name,
            setName,
            callEnded,
            me,
            callUser,
            leaveCall,
            answerCall,
        }}>
            {children}
        </SocketContext.Provider>
    )
}

export default {SocketContext, ContextProvider}