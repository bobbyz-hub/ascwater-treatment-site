import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'

// Wrap Chakra Box with motion
const MotionBox = motion(Box)

export default function Hero() {
  return (
    <Box
      bgImage="url('/Images/fib-filters.jpg')"
      bgSize="cover"
      bgPosition="center"
      h="100vh"
      w="100%"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      color="white"
    >
      {/* Overlay */}
      <Box
        position="absolute"
        inset="0"
        bg="rgba(0, 0, 0, 0.35)"
        zIndex="0"
      />

      {/* Animated Content */}
      <MotionBox
        position="relative"
        zIndex="1"
        p={6}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        maxW="90%"
      >
        <Heading
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          color="#00aaff"
          textShadow="0 2px 4px rgba(0,0,0,0.3)"
        >
          Clean Water. Healthy Life.
        </Heading>

        <Text
          mt={4}
          fontSize={{ base: "sm", md: "lg" }}
          fontWeight="medium"
        >
          We provide high-quality water purification and treatment services to homes and businesses.
        </Text>

        <Button
          as={RouterLink}
          to="/services"
          mt={6}
          size="lg"
          colorScheme="blue"
          bg="#0084ff"
          _hover={{ bg: "#005fa3" }}
          fontWeight="bold"
        >
          Learn More
        </Button>
      </MotionBox>
    </Box>
  )
}
