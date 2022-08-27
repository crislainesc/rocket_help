import React, { useState } from 'react'
import { VStack, Heading, Icon, useTheme } from 'native-base'
import { Envelope, Key } from 'phosphor-react-native'

import Logo from '../../assets/logo_primary.svg'

import { Input } from '../../components/input'
import { Button } from '../../components/button'

export function SignIn() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const { colors } = useTheme()

  const handleSingIn = () => {
    console.log(name, password)
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>
      <Input
        mb={4}
        placeholder="Email"
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
        onChangeText={setName}
        keyboardType="email-address"
      />

      <Input
        mb={8}
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        onChangeText={setName}
      />

      <Button title="Entrar" w="full" onPress={handleSingIn} />
    </VStack>
  )
}
