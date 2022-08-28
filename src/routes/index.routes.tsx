import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

import { Loading } from '../components/loading'

import { SignIn } from '../screens/signin'
import { AppRoutes } from './app.routes'

type AuthTypes = FirebaseAuthTypes.User | null

export const Routes: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [user, setUser] = useState<AuthTypes>()

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((response) => {
      setUser(response)
      setLoading(false)
    })

    return subscriber
  }, [])

  if (loading) {
    return <Loading />
  }

  return <NavigationContainer>{user ? <AppRoutes /> : <SignIn />}</NavigationContainer>
}
