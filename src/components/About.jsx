/* export default function About() {
    return (
        <section className="about">
          <h3>Why Choose Us?</h3>
          <p>With over 8 years of experience, we are committed to providing clean water using modern, sustainable technologies.</p>
          <div className="about-images">
            <img src="src/Images/borehole.jpg" alt="clean borehole water" />
            <img src="src/Images/clean-water.jpg" alt="clean final water" />
          </div>
          <section className="why-clean-water">
            <h2>Why Clean Water Matters</h2>
            <ul>
                <li>💧 Clean water protects your family from harmful contaminants and bacteria.</li>
                <li>🍴 Better water means safer cooking, cleaner dishes, and tastier drinks.</li>
                <li>🚿 Softer water is gentler on skin, hair, and clothing.</li>
                <li>🔧 Prevents damage to plumbing, appliances, and fixtures caused by hard water.</li>
                <li>🏡 Clean water adds value to your home and peace of mind to your life.</li>
            </ul>
          </section>
        </section>
    )
} */

import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export default function About() {
  return (
    <MotionBox
      as="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      bgGradient="linear(105deg, #00aaff63, #242424)"
      backgroundSize="400% 400%"
      borderRadius="2xl"
      p={8}
      my={8}
      color="white"
    >
      <VStack spacing={6} textAlign="center">
        <Heading color="#0077cc">Why Choose Us?</Heading>
        <Text fontSize="lg">
          With over 8 years of experience, we are committed to providing clean
          water using modern, sustainable technologies.
        </Text>
        <HStack
          spacing={{ base: 4, md: 10 }}
          justify="center"
          flexWrap="wrap"
        >
          <Image
            src="/Images/borehole.jpg"
            alt="clean borehole water"
            boxSize={{ base: '250px', md: '300px' }}
            borderRadius="xl"
            boxShadow="lg"
            objectFit="cover"
          />
          <Image
            src="/Images/clean-water.jpg"
            alt="clean final water"
            boxSize={{ base: '250px', md: '300px' }}
            borderRadius="xl"
            boxShadow="lg"
            objectFit="cover"
          />
        </HStack>
      </VStack>

      <Box mt={10} textAlign="center" px={4}>
        <Heading mb={4} fontSize="2xl" color="#0077cc">
          Why Clean Water Matters
        </Heading>
        <UnorderedList
          spacing={4}
          maxW="800px"
          mx="auto"
          textAlign="center"
          fontSize="lg"
          styleType="none"
        >
          <ListItem>💧 Protects your family from contaminants.</ListItem>
          <ListItem>🍴 Improves cooking, cleaning, and taste.</ListItem>
          <ListItem>🚿 Gentler on skin, hair, and clothes.</ListItem>
          <ListItem>🔧 Prevents plumbing and appliance damage.</ListItem>
          <ListItem>🏡 Adds value and peace of mind to your home.</ListItem>
        </UnorderedList>
      </Box>
    </MotionBox>
  )
}
