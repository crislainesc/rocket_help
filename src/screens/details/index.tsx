import React from 'react'
import { VStack, Text } from 'native-base'
import { useRoute } from '@react-navigation/native'

import { Header } from '../../components/header'

type RouteParams = {
  orderId: string
}

export const Details: React.FC = () => {
  const route = useRoute()

  const { orderId } = route.params as RouteParams

  return (
    <VStack flex={1} bg="gray.700">
      <Header title="Solicitação" />
      <Text color="white">{orderId}</Text>
    </VStack>
  )
}
