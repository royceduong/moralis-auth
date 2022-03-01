import { Container, Heading} from '@chakra-ui/react';
import { useNativeBalance } from 'react-moralis';

function App(props) {
  // const { authenticate, isAuthenticated, isAuthenticating, logout, authError, chainId, account} = useMoralis()
  // const {data: assets} = useERC20Balances(props)
  // console.log({assets})

  const {data:assets} = useNativeBalance(props)
  console.log(assets)
    return (
      <Container>
      <Heading>{assets.formatted}</Heading>
      </Container>
    )
} 
export default App;