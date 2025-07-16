import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Heading,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { NavLink as RouterNavLink } from 'react-router-dom'

const Links = [
{ name: 'Home', path: '/' },
{ name: 'Services', path: '/services' },
{ name: 'Products', path: '/products' },
{ name: 'About', path: '/about' },
{ name: 'Contact', path: '/contact' }
]

const NavLink = ({ name, path }) => (
  <Link
    as={RouterNavLink}
    to={path}
    px={3}
    py={2}
    rounded="md"
    _hover={{ textDecoration: 'none', bg: 'blue.600' }}
    _activeLink={{ bg: 'blue.700' }}
    color="white"
    fontWeight="medium"
  >
    {name}
  </Link>
)

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg="#517891" px={6} py={3} shadow="md" position="sticky" top="0" zIndex="999">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Heading textShadow="0 2px 4px rgba(0,0,0,0.3)" size="md" color="#00aaff">
          💧 ASC Water Treatment
        </Heading>

        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Toggle Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          color="white"
          bg="#0077cc"
          _hover={{ bg: '#005fa3' }}
        />

        {/* Desktop nav */}
        <HStack as="nav" spacing={6} display={{ base: 'none', md: 'flex' }}>
          {Links.map((link) => (
            <NavLink 
              key={link.name}
              name={link.name}
              path={link.path} 
            />
          ))}
        </HStack>
      </Flex>

      {/* Mobile nav */}
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <NavLink
                key={link.name}
                name={link.name}
                path={link.path} 
            />
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  )
}
