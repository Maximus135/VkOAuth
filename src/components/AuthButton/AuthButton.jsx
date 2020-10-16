import React from 'react';
import styles from './AuthButton.module.css';
import { Redirect } from 'react-router-dom';

const params = {
    client_id: 7629557,
    display: 'page',
    redirect_uri: 'http://localhost:3000/',
    scope: '',
    response_type: 'token',
    v: '5.124'
}

const login = ()=>{
    const link = `https://oauth.vk.com/authorize?client_id=${params.client_id}&display=${params.display}&redirect_uri=${params.redirect_uri}&scope=${params.scope}&response_type=${params.response_type}&v=${params.v}`;
    document.location.href = link;
}


const AuthButton = ()=>{

    if(window.localStorage.getItem('tokenVk') !== null && window.localStorage.getItem('userId') !== null){
        return <Redirect to='/profile' />  
    }
    
    const url = window.location.href;
    const access_token = url.match(new RegExp('access_token' + '=([^&=]+)'));
    const user_id = url.match(new RegExp('user_id' + '=([^&=]+)'));
    if(access_token){
        window.localStorage.setItem('tokenVk', access_token[1]);
        window.localStorage.setItem('userId', user_id[1]);
        return <Redirect to='/profile' />
    }
    else{
    return <a className={styles.AuthButton} onClick={login}>
        Авторизация
    </a>
    }
}

export default AuthButton;