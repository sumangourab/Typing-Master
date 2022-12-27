import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Box, Modal, Tab, Tabs } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import GoogleButton from 'react-google-button';
import {signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from 'firebase/auth';
import { auth,db } from '../firebaseConfig';
import {useAuthState} from 'react-firebase-hooks/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useAlert } from '../Context/AlertContext';
import { useTheme } from '../Context/ThemeContext';

const useStyles = makeStyles(()=>({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(2px)'
    },
    box: {
        width: 400,
        textAlign: 'center'
    }
}))


const AccountIcon = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    const [user] = useAuthState(auth);
    const {setAlert} = useAlert();
    const handleClose = ()=>{
        setOpen(false);
    }

    const handleValueChange = (e,v)=>{
        setValue(v);
    }  

    const navigate = useNavigate();

    const handleOpen = ()=>{
        if(user){
            //routing because user is logged in;
            navigate('/user');
        }
        else{
            //no user, open login/signup form
            setOpen(true);
        }
    }

    const logout = ()=>{
        auth.signOut().then((response)=>{
            setAlert({
                open: true,
                type: 'success',
                message: 'logged out'
            });
        }).catch((err)=>{
            setAlert({
                open: true,
                type: 'error',
                message: 'not able to logout'
            });
        });
    }

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = ()=>{
        signInWithPopup(auth,googleProvider).then(async(response)=>{
            const username = response.user.email;
            const ref= await db.collection('usernames').doc(username).set({
                uid: response.user.uid
            });
            setAlert({
                open: true,
                type: 'success',
                message: 'login successful'
            });
            handleClose();
        }).catch((err)=>{
            setAlert({
                open: true,
                type: 'error',
                message: 'login failed'
            });
        });
    }

    const githubProvider = new GithubAuthProvider();
    const signInWithGithub = ()=>{
    signInWithPopup(auth, githubProvider).then(async(response)=>{
        const username = response.user.email.split('@')[0];
        const ref= await db.collection('usernames').doc(username).set({
            uid: response.user.uid
        });
            setAlert({
                open: true,
                type: 'success',
                message: 'login successful'
            });
        }).catch((err)=>{
            setAlert({
                open: true,
                type: 'error',
                message: 'login failed'
            });
        });
    }
    
    const {theme} = useTheme();
    const classes = useStyles();
    
  return (
    <div>

       <AccountCircleIcon onClick={handleOpen} />
       
        {(user) && <LogoutIcon onClick={logout} style={{marginLeft:'8px'}} />}

        <Modal 
            open={open}
            onClose={handleClose}
            className={classes.modal}
        >
            <div className={classes.box}>
                <AppBar position='static'
                    style={{backgroundColor:'transparent'}}>
                    <Tabs
                        value={value}
                        onChange={handleValueChange}
                        variant='fullWidth'
                    >
                        <Tab label='login' style={{color: theme.title}}></Tab>
                        <Tab label='signup' style={{color: theme.title}}></Tab>
                    </Tabs>
                </AppBar>
                {value===0 && <LoginForm handleClose={handleClose}/>}
                {value===1 && <SignupForm handleClose={handleClose}/>}

                <Box>
                    <span>OR</span>
                    <GoogleButton
                        style={{width:'100%',marginTop:'8px' ,marginBottom:'8px'}}
                        onClick={signInWithGoogle}
                    />
                </Box>

                <Box>
                    <span>OR</span>
                  
                    <div>
                        
                        <button className='github-button' onClick={signInWithGithub}><div className='github-svg'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></div>Sign in with Githhub</button>
                    </div>
                 
                </Box>

              
                
            </div>
        </Modal>
    </div>
  )
    }
export default AccountIcon;