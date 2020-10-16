import React, {useState, useEffect} from 'react';
import styles from './Page.module.css';
import {getProfileInfo} from '../../API/OAuth';
import { Link } from 'react-router-dom';



const exit = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenVk');
}

const Page = ()=>{

    window.history.pushState({},{},'/profile');
    const [account, setAccount] = useState({});

    useEffect(() => {
        getProfileInfo().then(response=>{
            setAccount(response.response[0]);
        }).catch(response=>{
            console.log(response);
    })
    }, []);

    return(
    <div className={styles.InfoWrapper}>
        <div className={styles.Data}>
            <div className={styles.Name}>
                {account.first_name}
            </div>
            <div className={styles.SecondName}>
                {account.last_name}
            </div>
        </div>
        <Link to='/' className={styles.Exit} onClick={exit}>Выход</Link>
    </div>
    )
}

export default Page;