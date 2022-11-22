import { Button } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

type Props = {
  children: ReactNode
  to: string
}

export default function NavLink({ to, children }: Props) {
  const location = useLocation()
  return (
    <Link to={to}>
      <Button
        variant="ghost"
        colorScheme="whiteAlpha"
        color={location.pathname === to ? 'white' : 'gray.400'}
        bg={location.pathname === to ? 'whiteAlpha.100' : 'transparent'}
      >
        {children}
      </Button>
    </Link>
  )
}
