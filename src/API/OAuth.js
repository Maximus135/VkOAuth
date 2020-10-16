import axios from 'axios';

export const getProfileInfo = () => (
    axios.get('https://api.vk.com/method/users.get',{
        params: {
            user_ids: window.localStorage.getItem('userId'),
            v:5.124,
            access_token: window.localStorage.getItem('tokenVk'),
        }
    }).then(response => response.data)
)