import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

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
      borderRadius="2xl"
      p={8}
      my={8}
    >
      {/* Section Heading */}
      <Heading 
        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        color="#00aaff"
        textShadow="0 2px 4px rgba(0,0,0,0.3)" textAlign="center" mb={6}>
        Our Services
      </Heading>

      {/* Intro */}
      <Text color="gray.200" fontSize="lg" textAlign="center" maxW="700px" mx="auto" mb={6}>
        At ASC Water Treatment, we provide cutting-edge, reliable water purification solutions tailored to both homes and businesses. Here's a full breakdown of what we offer:
      </Text>

      {/* Detailed Services */}
      <VStack spacing={6} fontSize="lg" color="white" align="start" mb={10}>
        <Box>
          <Text fontWeight="bold">💧 Water Filtration Systems</Text>
          <Text fontSize="md" color="gray.300" pl={5}>
            Advanced reverse osmosis and multi-stage filters to ensure safe drinking water for your family or business.
          </Text>
        </Box>

        <Box>
          <Text fontWeight="bold">🔧 Maintenance & Repairs</Text>
          <Text fontSize="md" color="gray.300" pl={5}>
            Regular maintenance, troubleshooting, and on-site repair services to keep your systems running at peak performance.
          </Text>
        </Box>

        <Box>
          <Text fontWeight="bold">🏠 Residential Installations</Text>
          <Text fontSize="md" color="gray.300" pl={5}>
            Customized solutions for homes including kitchen sink filters, shower softeners, and whole-house systems.
          </Text>
        </Box>

        <Box>
          <Text fontWeight="bold">🏢 Commercial Solutions</Text>
          <Text fontSize="md" color="gray.300" pl={5}>
            Scalable water treatment systems for hotels, schools, farms, and large facilities.
          </Text>
        </Box>
      </VStack>

      {/* Images */}
      <HStack spacing={{ base: 4, md: 8 }} justify="center" flexWrap="wrap" mb={12}>
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

      {/* 🔥 Applications Section */}
      <Box mt={12} mb={12}>
        <Heading 
         fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
         color="#00aaff"
         textShadow="0 2px 4px rgba(0,0,0,0.3)" mb={4} textAlign="center">
          Applications of Our Water Treatment Machines
        </Heading>

        <VStack spacing={5} align="start" px={{ base: 2, md: 8 }} fontSize="md" color="gray.200">
          <Text>🏘️ <strong>Homes:</strong> Kitchen sinks, bathrooms, and whole-house systems for safe drinking and soft water.</Text>
          <Text>🏢 <strong>Hotels & Apartments:</strong> Centralized systems to supply filtered water to multiple rooms or floors.</Text>
          <Text>🏫 <strong>Schools:</strong> Ensures safe drinking water for students, staff, and kitchen facilities.</Text>
          <Text>🏥 <strong>Hospitals & Clinics:</strong> For use in labs, dialysis, cleaning, and general hydration needs.</Text>
          <Text>🏭 <strong>Factories & Industrial:</strong> Pre-treatment for manufacturing, cooling towers, and boiler feed water.</Text>
          <Text>🚜 <strong>Agriculture:</strong> Irrigation systems, poultry farms, and livestock hydration.</Text>
          <Text>💧 <strong>Water Businesses:</strong> Sachet water production, bottled water factories, and refill stations.</Text>
        </VStack>
      </Box>

      {/* CTA */}
      <Box textAlign="center">
        <Text color="gray.100" fontSize="lg" mb={4}>
          Need help choosing the right system for your home or business?
        </Text>
        <Button
          as={RouterLink}
          to="/contact"
          colorScheme="blue"
          size="lg"
        >
          Contact Us
        </Button>
      </Box>
    </MotionBox>
  );
}
