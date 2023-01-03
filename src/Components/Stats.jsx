import React, { useEffect } from 'react'
import Graph from './Graph'
import { db, auth } from '../firebaseConfig';
import { useAlert } from '../Context/AlertContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { Button } from '@mui/material';

const Stats = ({wpm, resetTest, accuracy, correctChars, incorrectChars, missedChars, extraChars,graphData}) => {
    var timeSet = new Set(); 
    const {setAlert} = useAlert();
    const newGraph = graphData.filter((i)=>{
        if(!timeSet.has(i[0])){
            timeSet.add(i[0]);
            return i;
        }
    });

    const [user] = useAuthState(auth);

    const pushResultToDatabase = ()=>{
        const resultsRef = db.collection('Results');
        const {uid} = auth.currentUser;
        if(!isNaN(accuracy)){
            resultsRef.add({
                wpm: wpm,
                accuracy: accuracy,
                characters: `${correctChars}/${incorrectChars}/${missedChars}/${extraChars}`,
                userID: uid,
                timeStamp: new Date()
            }).then((response)=>{
                setAlert({
                    open: true,
                    type: 'success',
                    message: 'result saved to db'
                });
            });
        }
        else{
            setAlert({
                open: true,
                type: 'error',
                message: 'invalid test'
            });
        }
        
    }

    useEffect(()=>{

        if(user){
            //saving because user is logged in;
            pushResultToDatabase();
        }
        else{
            //no user, no save
            setAlert({
                open: true,
                type: 'warning',
                message: 'login to save results'
            });
        }
        
    },[]);


  return (
    <div className="stats-box">
        <div className="left-stats">
            <div className="title">WPM</div>
            <div className="subtitle">{wpm}</div>
            <div className="title">Accuracy</div>
            <div className="subtitle">{accuracy}%</div>
            <div className="title">Characters</div>
            <div className="subtitle">{correctChars}/{incorrectChars}/{missedChars}/{extraChars}</div>
            <Button className='restart top' variant="outlined" endIcon={<RestartAltIcon />} onClick={resetTest}>
  Restart
</Button>
        </div>
        <div className="right-stats">
            <Graph graphData={newGraph}/>
        </div>
    </div>
  )
}

export default Stats