import React, {useState, createContext} from 'react';

export const context = createContext();

export const ContextProvider = props =>{

    const [userData, setUserData] = useState({});
    const [repos, setRepos] = useState({})
    const [followers, setFollowers] = useState({});
    const [following, setFollowing] = useState({});
    const [userData2, setUserData2] = useState({});

    return(
        <context.Provider value={{
            userData,
            setUserData,
            repos,
            setRepos,
            following,
            setFollowing,
            followers,
            setFollowers,
            userData2,
            setUserData2
        }}>
        {props.children}
        </context.Provider>
    );
}