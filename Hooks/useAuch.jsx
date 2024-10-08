import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase'

const useAuch = () => {
    const [user, setUser] = useState(null)

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,user=>{
            console.log('This User:'+ user)
            if (user) {
                setUser(user)
            }else{
                setUser(null)
            }
        })

        return unsub
    },[])
    return {user}
}

export default useAuch