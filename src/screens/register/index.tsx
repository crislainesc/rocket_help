import React, { useState } from 'react'
import { VStack } from 'native-base'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import firestore, { firebase } from '@react-native-firebase/firestore'

import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { Button } from '../../components/button'

export const Register: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [patrimony, setPatrimony] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const navigation = useNavigation()

  const handleNewOrderRegister = async () => {
    if (!patrimony || !description) {
      return Alert.alert('Registrar', 'Preencha todos os campos.')
    }

    setIsLoading(true)

    firestore()
      .collection('orders')
      .add({
        patrimony,
        description,
        status: 'open',
        created_at: firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        setIsLoading(false)
        Alert.alert('Solicitação', 'Solicitação registrada com sucesso.')
        navigation.goBack()
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
        return Alert.alert('Solicitação', 'Não foi possível registrar o pedido')
      })
  }

  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Solicitação" />
      <Input placeholder="Número do patrimônio" mt={4} onChangeText={setPatrimony} />
      <Input
        placeholder="Descrição do problema"
        flex={1}
        mt={5}
        multiline
        textAlignVertical="top"
        onChangeText={setDescription}
      />
      <Button title="Cadastrar" mt={5} isLoading={isLoading} onPress={handleNewOrderRegister} />
    </VStack>
  )
}
