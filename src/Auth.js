import { Button, Container, Heading, Alert, AlertTitle,AlertDescription, AlertIcon,Box,CloseButton } from '@chakra-ui/react';
import { useMoralis, useNativeBalance } from 'react-moralis';
function Auth(props){
    const { authenticate, isAuthenticated, isAuthenticating, logout, authError, account} = useMoralis()
  // const {data: assets} = useERC20Balances(props)
  // console.log({assets})

  const {data:assets} = useNativeBalance(props)
  console.log(assets)
  if(isAuthenticated){
    return (
      <Container>
        <Heading>Welcome {account} </Heading>
        {/* <Heading>{assets} </Heading> */}
        <Button onClick={() => logout() }>Logout</Button>
      </Container>
    ) 
  }

  return (
    <div>
      <Container>
        <Heading>Moralis authenticate</Heading>
          {authError &&(<Alert status='error'>
            <AlertIcon />
              <Box flex='1'>
                <AlertTitle>Authentication Failed</AlertTitle>
                <AlertDescription display='block'>
                  {authError.message}
                </AlertDescription>
              </Box>
              <CloseButton position='absolute' right='8px' top='8px' />
            </Alert>
            )}
          <Button 
            isLoading={isAuthenticating}
            onClick={() => authenticate()}>Login
          </Button>
      </Container>
    </div>
    
  );
}

export default Auth;