import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Box, Button, Flex,    Text,    useColorModeValue,
} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/auth/auth.action'



export default function Navbar() {

    return (
        <Box w="100%" bg={"#3182CE"} color="white" h="80px">
      <Flex
        w={"90%"}
        m="auto"
        alignItems={"center"}
        h="100%"
        justifyContent={"space-between"}
      >
        <Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(-10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"red"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            C
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"orange"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            O
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(-10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"green"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            I
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"blue"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            N
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(-10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"black"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            T
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"teal"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            A
          </Flex>
          <Flex
            alignItems={"center"}
            transform="rotate(-10deg)"
            boxShadow="dark-lg"
            justifyContent="center"
            bg={"darkviolet"}
            w="10"
            fontSize={"25"}
            fontWeight={"bold"}
            h="10"
            color="white"
            pl={2}
            pr={2}
          >
            B
          </Flex>
       
        
        </Flex>

        <Flex gap={5} alignItems="center">
          
          <Text fontSize={"20"} textTransform="capitalize">
           Welcome To Our Application
          </Text>
         
        </Flex>
      </Flex>
    </Box>
    )
}