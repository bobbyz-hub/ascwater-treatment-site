import { Box, Heading, Text, Image, VStack, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export default function Services() {
  return (
    <MotionBox
      as="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      bgGradient="linear(105deg, #00aaff63, #242424)"
      backgroundSize="400% 400%"
      animation="gradientShift 15s ease infinite"
      borderRadius="2xl"
      p={8}
      my={8}
    >
      <Heading textAlign="center" color="#0077cc" mb={6}>
        Our Services
      </Heading>

      <VStack spacing={4} fontSize="xl" color="white" mb={8}>
        <Text>💧 Water Filtration Systems</Text>
        <Text>🔧 Maintenance & Repairs</Text>
        <Text>🏠 Residential Installations</Text>
        <Text>🏢 Commercial Solutions</Text>
      </VStack>

      <HStack spacing={{ base: 4, md: 8 }} justify="center" flexWrap="wrap">
        <Image
          src="/Images/kitchen-ro.jpg"
          alt="kitchen reverse osmosis machine"
          boxSize="200px"
          borderRadius="full"
          boxShadow="lg"
          objectFit="cover"
        />
        <Image
          src="/Images/ro-water-plant.jpg"
          alt="reverse osmosis treatment plant"
          boxSize="200px"
          borderRadius="full"
          boxShadow="lg"
          objectFit="cover"
        />
        <Image
          src="/Images/4mem-ro.jpg"
          alt="4 membrane reverse osmosis system"
          boxSize="200px"
          borderRadius="full"
          boxShadow="lg"
          objectFit="cover"
        />
      </HStack>
    </MotionBox>
  )
}
