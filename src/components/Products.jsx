import { Box, Heading, Text, SimpleGrid, Image, Button, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'

// Wrap Chakra Box with motion
const MotionBox = motion(Box)

export default function Products() {
    const products = [
        { name: 'Fibre Filter', img: '/Images/fib-filters.jpg', description: 'Removes impurities.' },
        { name: 'UV Sterilizer', img: '/Images/UV-Water-Sterilizer.jpg', description: 'Kills bacteria and viruses.' },
        { name: 'Reverse Osmosis System', img: '/Images/4mem-ro.jpg', description: 'Advanced water purification.' },
        { name: 'Kitchen Reverse Osmosis System', img: '/Images/kitchen-ro.jpg', description: 'Advanced water purification in the kitchen.' },
        { name: 'Chlorine Feeder', img: '/Images/chlorine-feeder.jpg', description: 'Helps kill bacteria, viruses, and other micro-organisms, preventing the spread of waterborne diseases and maintaining water quality.' },
        { name: 'GP Tank', img: '/Images/GP_tank.jpg', description: 'Stores Water.' },
        { name: 'Housing Filters', img: '/Images/housing-filters.jpg', description: 'Removes impurities.' },
        { name: 'Pumping Machine', img: '/Images/pump-machine.jpg', description: 'Pumps water into the tanks.' },
        { name: 'Sand And Carbon', img: '/Images/sand-n-carbon.jpg', description: 'Removes differnt types of impurities.' },
      ]
      
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
    my={8}>
        <Box 
        px={4} 
        py={16} 
        textAlign="center"
        >
            <Heading 
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            color="#00aaff"
            textShadow="0 2px 4px rgba(0,0,0,0.3)">
                Main Products
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
            {products.map((product, index) => (
                <MotionBox
                key={index}
                borderWidth="1px"
                borderRadius="xl"
                p={4}
                whileHover={{ scale: 1.05 }}
                boxShadow="md"
                minH="400px"
                bg="#517891"
                >
                <VStack spacing={4}>
                    <Image 
                    mt={8} mb={4} boxSize="220px" objectFit="contain" bg="white" src={product.img} alt={product.name} borderRadius="lg" />
                    <Heading size="md">{product.name}</Heading>
                    <Text>{product.description}</Text>
                    <Button as={RouterLink} to="/contact" colorScheme="blue">
                    Get Quote
                    </Button>
                </VStack>
                </MotionBox>
            ))}
            </SimpleGrid>
        </Box>
    </MotionBox>
  )
}
