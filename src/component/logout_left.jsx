import styles from './logout_left.module.css'
import {useState}  from 'react';
import Image from '../my_image.jpg'




const Logout_left=()=>{

    const [btnstate,setbtnstate]=useState(false)

    function hendalepopup(){

      setbtnstate(!btnstate) 

    }

    function clearLS(){
        localStorage.clear();
        alert("gghgk")
        window.location.reload()
    }
    
    return(
        
        <div className={styles.Logout_left} onClick={hendalepopup} >
                <div className={styles.name_log_left}>
                    <img src={Image} alt="" />
                    <div>
                    <p>Anoop</p> 
                    <p>ANOOP A G</p>
                    </div>  
                </div>
                <div className={`${styles.logout_pop} ${btnstate ? styles.logout_pop2 : ''}`}  >
                    <div><p>add to existing account</p></div>
                    <div onClick={clearLS} ><p>Anoop AG</p></div>   
                </div>
                
        </div>
    )
}
export default Logout_left;