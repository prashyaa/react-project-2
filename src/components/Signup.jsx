import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'} >

        <form>
            <VStack alignItems={'center'} spacing={'8'} w={['full','96']} m={'auto'} >
                <Heading>VIDEO HUB</Heading>
                <Avatar alignSelf={'center'} boxSize={'28'} />
                <Input placeholder={'Name'} type={'text'} required focusBorderColor={'purple.500'} />

                <Input placeholder={'Email'} type={'email'} required focusBorderColor={'purple.500'} />
                <Input placeholder={'Password'} type={'password'} required focusBorderColor={'purple.500'} />
            
                <Button colorScheme={'purple'} w={'full'} type={'submit'} >Sign Up</Button>

                <Text textAlign={'right'} cursor={'pointer'} >Already SignUp?
                <Button variant={'link'} alignSelf={'flex-end'} colorScheme={'purple'} >
                    <Link to={'/login'} >Log In</Link>
                </Button>
                </Text>
            </VStack>
        </form>
      
    </Container>
  )
}

export default Signup
