/*export default function Footer() {
    return (
        <footer className="footer">
        <p>&copy; {new Date().getFullYear()} ASC Water Treatment | All rights reserved.</p>
      </footer>
    )
} */

import { Box, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box as="footer" mt="3rem" textAlign="center">
      <Text fontSize="0.9rem" color="#666">
        &copy; {new Date().getFullYear()} ASC Water Treatment | All rights reserved.
      </Text>
    </Box>
  )
}
