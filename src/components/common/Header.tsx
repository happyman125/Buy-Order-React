import { Flex, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import logo from '../../assets/anchor.png'
import NavLink from './NavLink'

export default function Header() {
  return (
    <Flex gap="5" bg="dark" w="full" py="5" px="8" color="white">
      <Link to="/">
        <Image src={logo} alt="logo" boxSize="10" filter="invert(1)" />
      </Link>
      <NavLink to="/buy-orders">Buy Orders</NavLink>
      <NavLink to="/">Datasets</NavLink>
    </Flex>
  )
}
