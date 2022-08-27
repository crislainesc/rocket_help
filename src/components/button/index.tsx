import React from 'react'
import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base'

type Props = IButtonProps & {
  title: string
}

export const Button: React.FC<Props> = ({ title, ...rest }: Props) => {
  return (
    <ButtonNativeBase bg="green.700" h={14} fontSize="sm" _pressed={{ bg: 'green.500' }} {...rest}>
      <Heading color="white" fontSize="sm">
        {title}
      </Heading>
    </ButtonNativeBase>
  )
}
