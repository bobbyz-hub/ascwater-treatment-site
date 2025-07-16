import { useState } from 'react'
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  Button,
  useToast
} from '@chakra-ui/react'

export default function Contact() {
  const toast = useToast()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Form submitted:', formData)

    toast({
      title: 'Message sent!',
      description: "Thank you for contacting us.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })

    // You can reset the form or send data to a server here
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      bg="gray.800"
      p={8}
      borderRadius="md"
      maxW="500px"
      mx="auto"
      my="2rem"
      boxShadow="md"
    >
      <Heading 
      as="h2" mb={6} fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
      color="#00aaff"
      textShadow="0 2px 4px rgba(0,0,0,0.3)" textAlign="center">
        Contact Us
      </Heading>
      <Text fontSize="md" color="gray.300" textAlign="center" mb={8}>
        Fill in the form below to contact us and we will respond to your request within two business days or less. 
        ASC Water Treatment recognizes your right to privacy and protection of the information you provide us.
      </Text>


      <FormControl isRequired mb={4}>
        <FormLabel color="white">Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          bg="white"
        />
      </FormControl>

      <FormControl isRequired mb={4}>
        <FormLabel color="white">Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          bg="white"
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel color="white">Phone Number</FormLabel>
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="e.g. +234 805 678 900"
          bg="white"
        />
      </FormControl>

      <FormControl isRequired mb={6}>
        <FormLabel color="white">Message</FormLabel>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          bg="white"
        />
      </FormControl>

      <Button
        type="submit"
        colorScheme="blue"
        width="full"
        fontWeight="bold"
      >
        Send
      </Button>
    </Box>
  )
}
