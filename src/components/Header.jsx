/*export default function Header() {
    return (
        <header>
        <h1>💧 ASC Water Treatment</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    )
}
bg="blue.600" "#242424"
*/

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

const Links = ['Home', 'Services', 'About', 'Contact']

const NavLink = ({ children }) => (
  <Link
    px={3}
    py={2}
    rounded={'md'}
    _hover={{ textDecoration: 'none', bg: 'blue.600' }}
    href={'#'}
    color="white"
    fontWeight="medium"
  >
    {children}
  </Link>
)

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg="#242424" px={6} py={3} shadow="md" position="sticky" top="0" zIndex="999">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Heading size="md" color="#00aaff">
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
        <HStack as={'nav'} spacing={6} display={{ base: 'none', md: 'flex' }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>
      </Flex>

      {/* Mobile nav */}
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  )
}
