import { Container, Heading, VStack, Input, Button, Text } from "@chakra-ui/react"
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <Container maxW={"container.xl"} h={"100vh"} p={"16"} >
        <form action="">
          <VStack alignItems={"strech"} spacing={"8"} w={["full", "96"]} m={"auto"} my={"16"}>
            <Heading>
              Welcome Back
            </Heading>
            <Input placeholder='Email' type={"email"} required focusBorderColor='purple.500' />
            <Input placeholder='Password' type={"password"} required focusBorderColor='purple.500' />
            <Button variant={"link"} alignSelf={"flex-end"} >
              <Link to={"/forgetpassword"}>Forget Password</Link>

            </Button>
          </VStack>
        </form>

      </Container>
    </div>
  )
}

export default Login