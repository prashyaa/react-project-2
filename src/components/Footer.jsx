// import React from 'react'
import { Box,  Button, Stack, HStack, Heading, Input, VStack, Text } from '@chakra-ui/react'
import { AiOutlineSend } from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'black'} minH={'40'} p={'16'} color={'white'} >
        <Stack direction={['column', 'row']} >
            <VStack alignItems={'stretch'} w={'full'} px={'4'} >
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']} >
                    Subscribe to get updates
                </Heading>
                <HStack borderBottom={'2px solid white'} py={'2'} >
                    <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor={'none'}  />
                    <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'} >
                        <AiOutlineSend size={'20'} />
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']} >  
            <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']} >
                    <Heading textAlign={'center'} >
                        VIDEO HUB
                    </Heading>
                    <Text> All rights Reserved </Text>
            </VStack> </VStack>
            <VStack w={'full'} size={'md'} >
                <Heading>
                    Social Media
                </Heading>
                <Button variant={'link'} colorScheme={'white'} >
                    <a href="/">Youtube</a>
                </Button>
                <Button variant={'link'} colorScheme={'white'} >
                    <a href="/">Instagram</a>
                </Button>
                <Button variant={'link'} colorScheme={'white'} >
                    <a href="/">Facebook</a>
                </Button>
            </VStack>
        </Stack>
    </Box>
  )
}
export default Footer