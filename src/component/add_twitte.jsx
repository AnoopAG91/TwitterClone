 import styles from './add_twitte.module.css'
 import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
 import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
 import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
 import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
 import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
 import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
 import Image from '../my_image.jpg'
 import { useState } from 'react';


 
  
const Add_twitte=()=>{
   
    let [inputValue, setinputValue]=useState("")

    function addtweet(){
        console.log(inputValue)
         }
   

    return (
        <div className={styles.add_twitte} >
            <div>
            <img src={Image} alt="" />
            <input type="text" placeholder="What is happening?" onChange={(e)=>{setinputValue(e.target.value)}} />
            </div>
           <br />
           <div className={styles.icon_log}>
           <div>
            <InsertPhotoOutlinedIcon color="primary" />
            <GifBoxOutlinedIcon color="primary" /> 
            <PollOutlinedIcon color="primary" />
            <SentimentSatisfiedAltOutlinedIcon color="primary" />
            <WorkHistoryOutlinedIcon color="primary" />
            <LocationOnOutlinedIcon color="primary" />
           </div>
           <button className={styles.icon_log_btn} onClick={addtweet} >Tweet</button>

           </div>
        </div>
    )
}
export default Add_twitte;