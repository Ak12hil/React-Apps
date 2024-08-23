import {createContext} from 'react';


const UserInfoContext=createContext({
    userName:"Guest",
    isAdmin:"false"
});

export default UserInfoContext;